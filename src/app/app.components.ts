import { Component } from '@angular/core';

      
@Component({
    
    selector: 'my-app',
    template: `

    <child-comp  [userName]="name" [userAge]="age"    
    (onChanged)="onChanged($event)"
    >
    <div class="mainbanner"></div>
   
                <p>Привет {{name}}</p>
                </child-comp>   
                <input type="text" [(ngModel)]="name" />    
                <input type="number" [(ngModel)]="age" />           
                <h2>Количество кликов: {{clicks}}</h2>
                `,
    styles: [`h2, p {color:#333;}`,
    `.mainbanner {width:100%; height:100px; background: teal;}

    `]
})
export class AppComponent { 
    name:string="Tom";
    age:number = 24;

    clicks:number = 0;
    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }
}