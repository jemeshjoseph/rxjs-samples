import { fromEvent } from 'rxjs';

let btn = document.querySelector('#btn');

let subscription = fromEvent(btn, 'click');

subscription.subscribe((event) => {
  console.log(event);
});
