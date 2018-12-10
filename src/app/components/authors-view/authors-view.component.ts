import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author';
import { GetBooksService } from 'src/app/services/get-books.service';

@Component({
  selector: 'app-authors-view',
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.css']
})
export class AuthorsViewComponent implements OnInit {

  public id: string;
  public Author: Author;
  public editedAuthorName: '';

  constructor(
    private Router: ActivatedRoute,
    private bookService: GetBooksService
  ) { }

  ngOnInit() {
    this.id = this.Router.snapshot.paramMap.get('id');
    this.getAuthors();
  }

  getAuthors() {
    this.bookService.getByAId(this.id).subscribe(
      (author) =>  {
        console.log(author);
          this.Author = (author);
      });
  }

  updateAuthor() {
    if (this.Author.name != this.editedAuthorName) {
      this.Author.name=this.editedAuthorName;
    }
  }

}
