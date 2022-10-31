import { Component} from '@angular/core';
        
@Component({
    selector: 'data-comp',
    template: `
    <div class="header" [ngStyle]="{'backgroundImage':'url(https://i.postimg.cc/fTNLnSzn/forbanner.png)','width':'1280px','height':'320px'}" >

</div>
    <div><h3>{{message}}</h3></div>
 
    <div><p>{{numbers}}</p></div>`,



})
export class DataComponent{ 
      
    message: string = "DataModule";
    numbers: number = 4;
    isHeader = true;
    currentClasses={
        header: this.isHeader,
      
    }

}