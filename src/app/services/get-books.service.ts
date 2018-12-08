import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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

  constructor(private http: HttpClient) {
  }

  getBooks() {
    return this.http.get<Book[]>("http://ec2-18-212-70-179.compute-1.amazonaws.com:8080/Bookstore-MVC/book/");
  }

  getById(id: string) {
    return this.http.get<Book>("http://ec2-18-212-70-179.compute-1.amazonaws.com:8080/Bookstore-MVC/book/"+id);
  }

  getByAId(id: string) {
    return this.http.get<Author>("http://ec2-18-212-70-179.compute-1.amazonaws.com:8080/Bookstore-MVC/author/"+id);
  }

}
