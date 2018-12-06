import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

const routes: Routes = [
    {path: '', redirectTo: 'main',pathMatch: 'full'},
    {path: 'main', component: HomeComponentComponent },
    {path: 'list', component: ListViewComponent},
    {path: 'detail/:id', component: DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }