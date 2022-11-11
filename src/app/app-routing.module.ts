import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SecondComponent } from './second/second.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactspageComponent } from './contactspage/contactspage.component';
import {AlbumsComponent} from './albums/albums.component';

const routes: Routes = [
{path:'', redirectTo: 'first', pathMatch: 'full'},  
{ path: 'first', component : FirstComponent},
{ path: 'second', component : SecondComponent},
{ path: 'mainpage', component: MainpageComponent},
{ path: 'aboutpage', component: AboutpageComponent},
{ path: 'contactspage', component: ContactspageComponent},
{ path: 'albumspage', component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }