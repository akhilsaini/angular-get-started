import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people-list',
  template: `
  <!--<p>
      people-list Works!
    </p> -->
    <!-- this is the new syntax for ng-repeat -->
    <ul>
      <li *ngFor="let person of people">
        <a [routerLink]="['/persons', person.id]">
          {{person.name}}
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];
  //selectedPerson : Person ;

  constructor(private peopleService : PeopleService) { 
    //this.people = peopleService.getAll();
  }

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }

  // selectPerson(person){
  //   this.selectedPerson = person;
  // }

}
