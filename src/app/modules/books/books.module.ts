import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './services/books';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './components/books-list';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';

@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  providers: [BooksService],
})
export class BooksModule {}
