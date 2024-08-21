import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    // data request here
    // everything related with data
    return books;
  }

  getBookById(id: number): Book | undefined {
    const book = books.find((book) => book.id === id);
    return book;
  }

  createBook(book: Partial<Book>): Book {
    const newID = books[books.length - 1].id + 1;
    const newBook: Book = {
      id: newID,
      title: book.title ?? '',
      author: book.author ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    books.push(newBook);
    return newBook;
  }

  update(bookId: number, updateBookFields: Partial<Book>): Book | undefined {
    const currBook = books.find((book) => book.id === bookId);
    const updatedBook = {
      id: bookId,
      title: updateBookFields.title ?? currBook.title,
      author: updateBookFields.author ?? currBook.author,
      publicationYear:
        updateBookFields.publicationYear ?? currBook.publicationYear,
    };
    const bookIdx = books.findIndex((book) => book.id === bookId);
    books[bookIdx] = updatedBook;
    return updatedBook;
  }

  delete(bookId: number): string {
    const currBook = books.find((book) => book.id === bookId);
    if (!currBook) return 'book does not exist';
    books.splice(
      books.findIndex((book) => book.id === bookId),
      1,
    );
    return 'Book deleted successfully';
  }
}
