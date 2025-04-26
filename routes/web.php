<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PrivacyPolicyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[HomeController::class,'index'])->name('home');
Route::get('privacy-policy', [PrivacyPolicyController::class, 'index'])->name('privacy-policy');
Route::get('/data-deletion', [PrivacyPolicyController::class, 'deletion'])->name('date-deletion');

//Route::get('experiences/get',[])
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
