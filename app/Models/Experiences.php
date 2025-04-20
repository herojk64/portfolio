<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experiences extends Model
{
    /** @use HasFactory<\Database\Factories\ExperiencesFactory> */
    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        'working'=>'boolean'
    ];

    protected static function boot(){
        parent::boot();

        static::created(function($model){
            $model['sort'] = $model->id;
            $model->save();
        });
    }
}
