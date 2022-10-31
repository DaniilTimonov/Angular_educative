import { Component} from '@angular/core';
        
@Component({
    selector: 'my-app',
    template: `
    <data-comp></data-comp>
    <div [ngClass]="currentClasses">
    
                    <h1>Hello Angular</h1>
                    <p>
                        Angular представляет модульную архитектуру приложения
                    </p>
                </div>
                <footer-comp></footer-comp>
   
                `,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .navyColor{color:navy;}`
    ]
})
export class AppComponent { 
     
    isVerdana = true;
    isNavy = true;
 
    currentClasses={
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }
}