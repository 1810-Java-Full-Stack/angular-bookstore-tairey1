import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  books: Book[] = [];
  Book: Book;
  authors: Author[] = [];
  Author: Author;

  constructor() {
    this.authors.push(new Author("4","J.K. Rowling","Wrote Harry Potter"));
    this.authors.push(new Author("5","Mark Zusak","Chill guy"));
    this.authors.push(new Author("6","Saints","Died a long time ago"));
    this.books.push(new Book("1","Harry Potter and Philosopher's Stone",this.authors.find((a)=>a.name=="J.K. Rowling"),"1st Harry Potter"));
    this.books.push(new Book("2","The Book Thief",this.authors.find((a)=>a.name=="Mark Zusak"),"Holocaust Book"));
    this.books.push(new Book("3","The Bible",this.authors.find((a)=>a.name=="Saints"),"The Roman Catholic Bible"));
  }

  getBooks() {
    return this.books;
  }

  getById(id: string) {
    return this.books.find((b)=>b.id===id);
  }

  getByAId(id: string) {
    return this.authors.find((a)=>a.id===id);
  }

}
