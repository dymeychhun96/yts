<?php

namespace App\Http\Controllers\V1;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
// Route::get('/search', [HomeController::class, 'search'])->name('search');
// Route::get('/detail/{movie_id}', [HomeController::class, 'detail'])->name('detail');
// Route::get('/browse_movies/2160p', [HomeController::class, 'browseMovies'])->name('browse-movies');

// Route::get('/scrape-torrent', [SeedrController::class, 'scrapeTorrent'])->name('scrape-torrent');
