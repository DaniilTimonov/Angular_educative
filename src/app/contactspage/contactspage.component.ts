import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contactspage',
  templateUrl: './contactspage.component.html',
  styleUrls: ['./contactspage.component.css']
})
export class ContactspageComponent implements OnInit {

  constructor(
    private router: Router,
    
      ) { }
    
      ngOnInit(): void {
      }
      async goToNextPage() {
        await this.router.navigate( ['/contactspage']);
      }
    
    }
