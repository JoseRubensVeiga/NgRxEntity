import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBooks } from '../../store/book.actions';
import { selectAllBooks } from '../../store/book.selectors';
import { IAppState } from '../../../../core/store/store-interface';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  books$ = this.store.select(selectAllBooks);
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.loadBookIfEmpty();
  }

  reloadBooks(): void {
    this.store.dispatch(loadBooks());
  }

  private loadBookIfEmpty(): void {
    this.store
      .select(selectAllBooks)
      .pipe(
        take(1),
        filter((v) => !v)
      )
      .subscribe(() => {
        this.store.dispatch(loadBooks());
      });
  }
}
