import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/store-interface';
import { bookAdapter } from './book.interface';

const selectBookState = (state: IAppState) => state.books;

const { selectAll } = bookAdapter.getSelectors();

export const selectAllBooks = createSelector(selectBookState, selectAll);

export const hasBooks = createSelector(
  selectBookState,
  (state) => state.ids.length > 0
);
