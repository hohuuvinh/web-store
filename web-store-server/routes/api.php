<?php

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

//auth
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('payload', 'App\Http\Controllers\AuthController@payload');
});

//categoris
Route::get('GetCategoris', 'App\Http\Controllers\CategorisController@GetCategoris');
Route::post('AddCategoris', 'App\Http\Controllers\CategorisController@AddCategoris');
Route::post('UpdateCategoris', 'App\Http\Controllers\CategorisController@UpdateCategoris');
Route::post('DeleteCategoris', 'App\Http\Controllers\CategorisController@DeleteCategoris');
Route::get('DetailCategoris/{id}', 'App\Http\Controllers\CategorisController@DetailCategoris');
Route::get('GetPostFromCategory/{idCategory}', 'App\Http\Controllers\CategorisController@GetPostFromCategory');

//posts
Route::get('GetPosts', 'App\Http\Controllers\PostsController@GetPosts');
Route::post('AddPosts', 'App\Http\Controllers\PostsController@AddPosts');
Route::post('UpdatePosts', 'App\Http\Controllers\PostsController@UpdatePosts');
Route::post('DeletePosts', 'App\Http\Controllers\PostsController@DeletePosts');
Route::get('DetailPosts/{id}', 'App\Http\Controllers\PostsController@DetailPosts');


