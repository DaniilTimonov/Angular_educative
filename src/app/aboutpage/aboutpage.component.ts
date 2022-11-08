import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor(
    private router: Router,
    
      ) { }
    
      ngOnInit(): void {
      }
      async goToNextPage() {
        await this.router.navigate( ['/aboutpage']);
      }
    
    }
