import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.components';
import { RouterModule} from "@angular/router";

import {TestDataModule} from './test/test.module';
import { FooterComponent} from './footer/footer.module'
import {HeaderDataComponent} from './header/header.module';
import { MenuComponent } from './menu/menu.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { MenulinksComponent } from './menulinks/menulinks.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactspageComponent } from './contactspage/contactspage.component';
import { AlbumsComponent } from './albums/albums.component';
import { TraditionalalbumComponent } from './albums/traditionalalbum/traditionalalbum.component';
import { PosteralbumComponent } from './albums/posteralbum/posteralbum.component';
import { DigitalalbumComponent } from './albums/digitalalbum/digitalalbum.component';


   
@NgModule({
    imports:      [   AppRoutingModule, BrowserModule, FormsModule,  TestDataModule, FooterComponent, HeaderDataComponent, RouterModule],
    declarations: [ AppComponent, MenuComponent, FirstComponent, SecondComponent, MenulinksComponent, MainpageComponent, AboutpageComponent, ContactspageComponent, AlbumsComponent, TraditionalalbumComponent, PosteralbumComponent, DigitalalbumComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }