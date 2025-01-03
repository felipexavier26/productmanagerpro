<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\Api\ProductController as ApiProductController; 
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index'])->name('products.index');
        Route::get('{product}', [ProductController::class, 'show'])->name('products.show');
        
        Route::get('create/product', [ProductController::class, 'create'])->name('products.create');
        Route::post('/', [ProductController::class, 'store'])->name('products.store');

        Route::get('{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
        Route::put('{product}', [ProductController::class, 'update'])->name('products.update');
        Route::delete('{product}', [ProductController::class, 'destroy'])->name('products.destroy');
    });
    
});

require __DIR__ . '/auth.php';
