'use strict'

class StoreUser {
    get rules() {
        return {
            // validation rules
            username: 'required',
            email: 'required|unique:users,email', //requerido, unico en la tabla users con el campo email
            password: 'required'
        }
    }

    get messages() {
        return {
            'username.required': 'El campo usuario es requerido',
            'email.required': 'El campo email es requerido',
            'email.unique': 'El email ya existe',
            'password.required': 'El password es requerido'
        }
    }
}

module.exports = StoreUser