<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Auth::routes();

Route::get('auth-state', function () {
	return auth()->check() ? 1 : 0;
});

Route::get('/', function () {
	return view('index');
});

Route::resource('categories', 'CategoryController');
Route::resource('posts', 'PostController');
Route::resource('projects', 'ProjectController');
Route::resource('tags', 'TagController');
Route::resource('medias', 'MediaController');

Route::get('{page}', 'ErrorController@error404')
	->where('page', '(.*)');
