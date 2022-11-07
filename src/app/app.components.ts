import { Component} from '@angular/core';        
@Component({
    selector: 'my-app',
    template: `
 <header-comp></header-comp>
<main [ngClass]="currentClasses" class='mainstyles'>
<menu></menu>

<router-outlet></router-outlet>


<h1>Hello Angular</h1>
<p>
                        Angular представляет модульную архитектуру приложения
                    </p>
                </main>
            <footer-comp></footer-comp>
                `,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .navyColor{color:navy;}
        .mainstyles{width:1280px; height:400px; background: #FFCC99;}
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