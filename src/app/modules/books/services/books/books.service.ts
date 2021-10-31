import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import endpoints from 'src/environments/endpoints';

import { Book } from '../../models/Book';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const url = endpoints.books;

    return this.http.get<Book[]>(url);
  }
}
