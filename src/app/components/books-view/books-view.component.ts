import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { GetBooksService } from 'src/app/services/get-books.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  public id: string;
  public Book: Book;
  public editedBookTitle: '';
  public editedAuthorName: '';

  constructor(
    private Router: ActivatedRoute,
    private bookService: GetBooksService
  ) { }

  ngOnInit() {
    this.id = this.Router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getBook();
  }

  getBook() {
    this.bookService.getById(this.id).subscribe(
      (book) =>  {
        this.Book = (book);
      });
  }

  updateTitle() {
    if (this.Book.title != this.editedBookTitle) {
      this.Book.title=this.editedBookTitle;
    }
  }

  updateBookAuthor() {
    if (this.Book.author.name != this.editedAuthorName) {
      this.Book.author.name=this.editedAuthorName;
    }
  }

}
