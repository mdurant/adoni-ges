'use strict'

const Book = use('App/Models/Book');

class BookController {
    async index({ response }) {
        let books = await Book.all();
        return response.json(books);
    }

    async store({ request, response }) {
        const bookInfo = request.only(['title', 'isbn', 'author']);
        const book = new Book;
        book.title = bookInfo.title;
        book.isbn = bookInfo.isbn;
        book.author = bookInfo.author;
        await book.save();
        return response.status(201).json(book);
    }

    async show({ response, params }) {
        const book = await Book.find(params.id); //Comprobamos el Book por el ID

        if (!book) {
            return response.status(404).json({ data: "Recurso no encontrado" });
        }

        return response.json(book);
    }

    async update({ request, response, params }) {
        const bookInfo = request.only(['title', 'isbn', 'author']);
        const book = await Book.find(params.id);

        if (!book) {
            return response.status(404).json({ data: "Recurso no encontrado" });
        }

        book.title = bookInfo.title;
        book.isbn = bookInfo.isbn;
        book.author = bookInfo.author;
        await book.save();

        return response.status(200).json(book);
    }

    async destroy({ response, params }) {
        const book = await Book.find(params.id);

        if (!book) {
            return response.status(404).json({ data: "Recurso no encontrado" });
        }

        await book.delete();

        return response.status(204).json({ data: "Recurso ha sido eliminado" });
    }
    async paginated({ response, params }) {
        const books = await Book.query()
            .orderBy('id', 'desc')
            .paginate(params.offset, 2);

        if (!books) {
            return response.status(404).json({ data: "Recurso no encontrado" });
        }

        return response.status(200).json(books);
    }

}

module.exports = BookController