import { Component} from '@angular/core';
        
@Component({
    selector: 'footer-comp',
    template: `<div class='footerline'><h3>{{footermessage}}</h3></div>`,
    styles: [`
    .footerline {color:red;}
    `]

})
export class FooterDataComponent{ 
      
    footermessage: string = "footerDataModule";
    
}