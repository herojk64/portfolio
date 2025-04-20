<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperiencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach(\App\Models\Experiences::all() as $model){
            if(!$model->sort){
                $model->sort = $model->id;
                $model->save();
            }
        }
    }
}
