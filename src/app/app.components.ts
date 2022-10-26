import { Component } from '@angular/core';

      
@Component({
    
    selector: 'my-app',
    template: `
    <div class="mainbanner"></div>
    <child-comp></child-comp>
 

                <p>Привет {{name}}</p>
              
                `,
    styles: [`h2, p {color:#333;}`,
    `.mainbanner {width:100%; height:100px; background: teal;}

    `]
})
export class AppComponent { 
    name = 'Петр';
}