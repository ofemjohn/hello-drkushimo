// TODO: replace with real titles, cover art, descriptions, prices and a
// purchase/payment link once each book is ready. Per Dr. Kushimo's direction,
// these render as simple "Coming Soon" cards only — no checkout, no email capture.
export type Book = {
  id: string;
  label: string;
  cover: string;
};

export const books: Book[] = [
  { id: "book-one", label: "Book One", cover: "/images/books/book-01.svg" },
  { id: "book-two", label: "Book Two", cover: "/images/books/book-02.svg" },
];
