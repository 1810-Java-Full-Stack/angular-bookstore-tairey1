import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AuthorsViewComponent } from './components/authors-view/authors-view.component';
import { BooksViewComponent } from './components/books-view/books-view.component';

const routes: Routes = [
    {path: '', redirectTo: 'main',pathMatch: 'full'},
    {path: 'main', component: HomeComponentComponent },
    {path: 'list', component: ListViewComponent},
    {path: 'author/:id', component: AuthorsViewComponent},
    {path: 'book/:id', component: BooksViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }