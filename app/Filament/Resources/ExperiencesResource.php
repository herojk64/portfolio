<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExperiencesResource\Pages;
use App\Filament\Resources\ExperiencesResource\RelationManagers;
use App\Models\Experiences;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ExperiencesResource extends Resource
{
    protected static ?string $model = Experiences::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Information')->schema([

                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('company')
            ->label('Company Name')
                    ->required()
            ,
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\DatePicker::make('from_date')
                    ->required(),
                Forms\Components\DatePicker::make('to_date')
                    ->reactive()
                    ->disabled(fn($get)=>$get('working'))
                    ->required(fn($get)=>!$get('working'))
                    ,
                Forms\Components\Toggle::make('working')
                    ->default(false)
                    ->reactive()
                    ->afterStateUpdated(fn($get,$set)=>$get('working')?$set('to_date',null):null)
                    ->required(),
                ]),
                Forms\Components\FileUpload::make('logo')
                ->image()
                ->imageEditor()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('from_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('to_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\IconColumn::make('working')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('sort')
            ->reorderable('sort')
            ;
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListExperiences::route('/'),
            'create' => Pages\CreateExperiences::route('/create'),
            'edit' => Pages\EditExperiences::route('/{record}/edit'),
        ];
    }
}
