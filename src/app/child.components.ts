import { Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<h2>Добро пожаловать {{name}}!</h2>
    <div class="secondbanner"></div>
    <button   class="btn btn-primary"> Enter </button>
    
    `,
    styles: [`h2, p {color:red;}`,
`.secondbanner {width:100%; height:200px; background:red;}`]
})
export class ChildComponent { 
    name= "Daniil Artspace";
}