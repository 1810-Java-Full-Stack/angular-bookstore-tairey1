import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { GetBooksService } from 'src/app/services/get-books.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  public id: string;
  public Book: Book;

  constructor(
    private Router: ActivatedRoute,
    private BookService: GetBooksService
  ) { }

  ngOnInit() {
    this.id = this.Router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.Book = this.BookService.getById(this.id);
    console.log(Book);
  }

}
