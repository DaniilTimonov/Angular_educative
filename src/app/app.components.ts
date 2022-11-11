import { Component} from '@angular/core';        
@Component({
    selector: 'my-app',
    template: `
<div class="general" >
 <header-comp></header-comp>
<main [ngClass]="currentClasses" class='mainstyles'>
<menu></menu>
<menulinks></menulinks>
<router-outlet class="router"></router-outlet>
                </main>
            <footer-comp></footer-comp>
</div>
               `,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .navyColor{color:navy;}
        .mainstyles{width:1280px; height:1130px; background: #FFCC99; align-items:center;}
        .general {
            display: flex;
            flex-direction:column;
            justify-content: center;
              align-items: center;
          }
        `
    ]
})
export class AppComponent { 
     
    isVerdana = true;
    isNavy = true;
 
    currentClasses={
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }

    items: string[] = [];
    name: string = "";
  
      
    addItem(name: string){
          
    
    }
    ngOnInit(){
   
    }

}