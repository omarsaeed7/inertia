<?php

use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'omar']);
});
Route::get('/about', function () {
    return Inertia::render('About', ['name' => 'about']);
});
Route::get('/contact', function () {
    return Inertia::render('Contact', ['name' => 'contact']);
});

Route::post('/upload', [UploadController::class, 'upload']);
Route::delete('/upload', [UploadController::class, 'revert']);

Route::resource('/users', UserController::class);
