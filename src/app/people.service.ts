import { Injectable } from '@angular/core';

import { Person } from './person';

// 1. Extract array to a PEOPLE variable
const PEOPLE : Person[] = [
  {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''},
  {id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: ''},
  {id: 3, name: 'Han Solo', height: 185, weight: 85, profession: ''},
];

@Injectable()
export class PeopleService {

  constructor() { }

  getAll() : Person[] {
    // 2. Refactor to use PEOPLE variable
    return PEOPLE;
  }

  // 3. New method also uses PEOPLE variable
  get(id: number) : Person {
    return PEOPLE.find(p => p.id === id);
  }

  save(person : Person) {
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

}
