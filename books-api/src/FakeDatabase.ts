export interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationYear: 1925,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationYear: 1960,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    publicationYear: 1949,
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    publicationYear: 1997,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publicationYear: 1951,
  },
];
