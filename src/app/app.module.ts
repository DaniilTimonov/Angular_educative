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


   
@NgModule({
    imports:      [   AppRoutingModule, BrowserModule, FormsModule,  TestDataModule, FooterComponent, HeaderDataComponent, RouterModule],
    declarations: [ AppComponent, MenuComponent, FirstComponent, SecondComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }