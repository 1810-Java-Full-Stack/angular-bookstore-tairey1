import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { FormsModule } from '@angular/forms';
import { AuthorsViewComponent } from './components/authors-view/authors-view.component';
import { BooksViewComponent } from './components/books-view/books-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListViewComponent,
    AuthorsViewComponent,
    BooksViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
