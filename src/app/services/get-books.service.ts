import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  books: Book[] = [];
  Book: Book;

  constructor() {
    this.books.push(new Book(1,"Harry Potter and Philosopher's Stone","J.K. Rowling","1st Harry Potter"));
    this.books.push(new Book(2,"The Book Thief","Mark Zusak","Holocaust Book"));
    this.books.push(new Book(3,"The Bible","Saints","The Roman Catholic Bible"));
  }

  getBooks() {
    return this.books;
  }

  getById(id: string) {
    for (let b of this.books) {
      if (b.id == id) {
        console.log(b);
        return b;
      }
    }

  }
}
