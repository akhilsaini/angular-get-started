import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-details',
  template: `
    <section *ngIf="person">
      <h2>You selected : {{person.name}}</h2>
      <h3>Description</h3>
      <p>
        {{person.name}} weighs {{person.weight}} and is {{person.height}} tall.
      </p>
    </section>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit,OnDestroy {  
  // @Input() person : Person;
  person : Person;
  sub: any;

  constructor(private peopleService : PeopleService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });

  }

  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    this.sub.unsubscribe();
  }

}
