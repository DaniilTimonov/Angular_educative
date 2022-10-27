import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TestDataComponent }   from './test.component'
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TestDataComponent],
    exports: [ TestDataComponent]       // экспортируем компонент
})
export class TestDataModule { }