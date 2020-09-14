<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('get_empresas', 'EmpresaController@getEmpresas');
Route::get('get_empresa/{empresa}', 'EmpresaController@getEmpresa');
Route::get('get_servicio/{servicio}', 'EmpresaController@getServicio');
Route::get('get_item/{id}', 'EmpresaController@getItem');
Route::get('get_empresas_categoria/{categoria}', 'EmpresaController@getCategorias');
Route::get('inventarios', 'EmpresaController@inventarios');

// Route::group([
//     // 'middleware' => 'api',
//     'prefix' => 'auth'
// ], function($router) {
//     Route::post('login', 'AuthController@login');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');
// });

// Route::group([
//     'middleware' => 'jwt.auth',
//     //'prefix' => 'auth'
// ], function($router) {
// });