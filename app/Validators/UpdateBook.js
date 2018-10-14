'use strict'

class UpdateBook {
    get rules() {
        const bookId = this.ctx.params.id; //se accede al ID del libro para editar
        return {
            // validation rules
            // tiene que ser con comillas ´ ´
            title: 'required|unique:books, title,id, ${bookId}',
            isbn: 'required|unique:books,isbn,id,$ { bookId }', //requerido, unico en la tabla users con el campo email
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

module.exports = UpdateBook,