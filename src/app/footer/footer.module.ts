import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { FooterDataComponent  }   from './footer.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ FooterDataComponent],
    exports: [ FooterDataComponent]       // экспортируем компонент
})
export class FooterComponent { }