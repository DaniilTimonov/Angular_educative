import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.components';
import { DataModule }   from './data/data.module';
import {TestDataModule} from './test/test.module';
   
@NgModule({
    imports:      [ BrowserModule, DataModule, TestDataModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }