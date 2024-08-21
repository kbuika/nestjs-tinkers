import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    // get params
    // get headers
    // validate data
    // check roles
    // error handling & logging
    return this.booksService.getAllBooks();
  }

  @Get('/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    return this.booksService.getBookById(+id);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book {
    const bookData = book;
    if (!book.title || !book.title || !book.publicationYear) return undefined;
    return this.booksService.createBook(bookData);
  }

  @Put('/:id')
  updateBook(@Body() book: Book, @Param('id') id: string): Book {
    return this.booksService.update(+id, book);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string): string {
    return this.booksService.delete(+id);
  }
}
