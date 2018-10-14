'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {

    Route.post('login', 'AuthController.login');
    Route.post('register', 'AuthController.register').validator('StoreUser'); //No pasará por metodo register hasta aprobar validador

    Route.resource('books', 'BookController').middleware(['auth:api']) // Toda llamada a Books estará protegida por el middleware auth.api
        .validator(new Map([
            ['books.store', 'StoreBook'],
            ['books.update', 'UpdateBook']
        ]))
}).prefix('api/v1');

Route.group(() => {

}).prefix('api/v2');