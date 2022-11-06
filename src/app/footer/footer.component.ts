import { Component} from '@angular/core';


@Component({
    selector: 'footer-comp',
    template: `<footer class='footerline'[ngStyle]="{'backgroundImage':'url(/assets/images/footer.jpg)','width':'1280px','height':'100px'}" >
    </footer>`
})
export class FooterDataComponent{ 
      
    footermessage: string = "footerDataModule";
    
}