<?php

namespace App\Filament\Resources\ExperiencesResource\Pages;

use App\Filament\Resources\ExperiencesResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditExperiences extends EditRecord
{
    protected static string $resource = ExperiencesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
