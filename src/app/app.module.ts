import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.components';
import { ChildComponent }   from './child.components';


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent,  ChildComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }