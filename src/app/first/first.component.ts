import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private router: Router,
    
      ) { }
    
      ngOnInit(): void {
      }
      async goToNextPage() {
        await this.router.navigate( ['/second']);
      }
    
    }
