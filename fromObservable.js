// Converting existing code for async operations into observables
// converting promise into observable using from()

import { from, Observable } from 'rxjs';
import fetch from 'node-fetch';

const observable = from(
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
);

observable.subscribe(
  (data) => {
    console.log('Response: ', data);
  },
  (error) => {
    console.log('Error: ', error);
  }
);
