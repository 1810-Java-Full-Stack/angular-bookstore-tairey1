import { Component, OnInit } from '@angular/core';
import { GetBooksService } from 'src/app/services/get-books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public books = [];
  public total_pages: number;
  public current_page: number;
  public tempBooks = [];

  constructor(
    private bookService: GetBooksService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      (book) =>  {
        this.books = book;
        /*this.current_page = 1;
        for (let i = 0; i < 3; i++) {
          this.books.push(book[i]);
        }*/
      });
  }

}
