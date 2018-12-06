import { Component, OnInit } from '@angular/core';
import { GetBooksService } from 'src/app/services/get-books.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public books = [];

  constructor(
    private GetBookService: GetBooksService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.books = this.GetBookService.getBooks();
  }

}
