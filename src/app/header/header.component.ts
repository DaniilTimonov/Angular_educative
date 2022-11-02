import { Component} from '@angular/core';
        
@Component({
    selector: 'header-comp',
    template: `<header class="header" [ngStyle]="{'backgroundImage':'url(https://i.postimg.cc/fTNLnSzn/forbanner.png)','width':'1280px','height':'320px'}" >
</header>`
})
export class HeaderComponent{ 
      
    footermessage: string = "header will be there";
    
}