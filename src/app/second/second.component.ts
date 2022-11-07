import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private router: Router,) { }
    
      ngOnInit(): void {
      }
    async goToFirstPage() {
    await  this.router.navigate(['/first'])
    }
    
    }
