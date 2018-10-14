'use strict'

class StoreBook {
    get rules() {
        return {
            // validation rules
            title: 'required|unique:books, title',
            isbn: 'required|unique:books,isbn', //requerido, unico en la tabla users con el campo email
            author: 'required'
        }
    }

    get messages() {
        return {
            // validation rules
            'title.required': 'El campo Título es requerido',
            'title.unique': 'El título ya existe!',
            'isbn.required': 'El campo ISBN es requerido', //requerido, unico en la tabla users con el campo email
            'isbn.unique': 'El ISBN ya existe!',
            'author.required': 'El campo Autor es requerido'
        }
    }
}

module.exports = StoreBook