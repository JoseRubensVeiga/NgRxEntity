import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/Book';
import { setBooks } from './book.actions';
import { bookAdapter, BookState } from './book.interface';

const initialState = bookAdapter.getInitialState<BookState>({
  selectedBook: null,
  ids: [],
  entities: {},
});

export const booksReducer = createReducer(
  initialState,
  on(setBooks, (state, { books }: { books: Book[] }) =>
    bookAdapter.setAll(books, state)
  )
);
