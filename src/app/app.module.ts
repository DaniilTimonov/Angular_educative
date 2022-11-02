import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.components';


import {TestDataModule} from './test/test.module';
import { FooterComponent} from './footer/footer.module'
import {HeaderDataComponent} from './header/header.module'
   
@NgModule({
    imports:      [ BrowserModule, FormsModule,  TestDataModule, FooterComponent, HeaderDataComponent],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }