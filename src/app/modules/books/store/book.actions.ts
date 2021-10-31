import { createAction, props } from '@ngrx/store';

import { Book } from '../models/Book';

export enum BooksActions {
  LoadBooks = '[Books] Load Books',
  SetBooks = '[Books] Set Books',
}

export const loadBooks = createAction(BooksActions.LoadBooks);

export const setBooks = createAction(
  BooksActions.SetBooks,
  props<{ books: Book[] }>()
);
