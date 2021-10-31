import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, filter, take } from 'rxjs/operators';
import { IAppState } from 'src/app/core/store/store-interface';
import { BooksService } from '../services/books';

import { BooksActions, setBooks } from './book.actions';
import { hasBooks } from './book.selectors';

@Injectable()
export class BookEffects {
  $loadBooks = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.LoadBooks),
      switchMap(() => this.booksService.getBooks()),
      map((books) => setBooks({ books }))
    );
  });

  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store<IAppState>
  ) {}
}
