import { Input, Component, EventEmitter, Output } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `
    <ng-content></ng-content>

    <h2>Добро пожаловать это child-component {{userName}}!</h2>
    <div class="secondbanner"></div>
    <button   class="btn btn-primary"> Enter </button>

    <p> Взаимодействие между компонентами </p>
    <p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>

    <button (click) = "change(true)"> + </button>
    <button (click) = "change(false)"> - </button>
    `,
    styles: [`h2, p {color:red;}`,
`.secondbanner {width:100%; height:200px; background:#FFFFCC;}`]
})
export class ChildComponent{ 
    @Input() userName: string = "";
     _userAge: number = 0;
      
    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
  }
  get userAge() { return this._userAge; }

  @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }




    
}