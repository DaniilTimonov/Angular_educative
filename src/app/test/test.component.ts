import { Component} from '@angular/core';
        
@Component({
    selector: 'test-comp',
    template: `<div><h3>{{test_message}}</h3></div>
    <div><p>{{numbers_test}}</p></div> 
    
    `
})
export class TestDataComponent{ 
      
    test_message : string = "testDataModule";
    numbers_test: number = 2236;
}