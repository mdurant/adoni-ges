'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with auths
 */

const User = use('App/Models/User');
class AuthController {

    async login({ request, response, auth }) {
        const { email, password } = request.all();
        const user = await auth.attempt(email, password);
        return response.json(user);

    }

    async register({ request, response, auth }) {
        const user = new User;
        user.username = request.input('username');
        user.email = request.input('email');
        user.password = request.input('password');

        await user.save(); // Guardar
        //await auth.generate(user); //Generar usuario y generar Token

        return response.json(user);

    }
}

module.exports = AuthController