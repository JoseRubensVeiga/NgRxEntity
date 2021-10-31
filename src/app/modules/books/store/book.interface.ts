import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from '../models/Book';

export interface BookState extends EntityState<Book> {
  selectedBook: Book | null;
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();
