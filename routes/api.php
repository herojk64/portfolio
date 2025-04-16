<?php


use App\Http\Controllers\API\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::controller(ProjectsController::class)->name('project.')->prefix('projects')->group(function(){
Route::get('/get','index')->name('get');
});

Route::controller(\App\Http\Controllers\API\ExperienceController::class)->name('experience.')->prefix('experiences')->group(function(){
    Route::get('/get','index')->name('get');
});
