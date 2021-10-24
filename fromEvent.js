// import { fromEvent } from 'rxjs';
// import { scan, throttleTime } from 'rxjs/operators';

const { fromEvent } = rxjs;
const { scan, throttleTime } = rxjs.operators;

let btn = document.querySelector('#btn');

// Example 1
// let observable = fromEvent(btn, 'click');

// observable.subscribe((event) => {
//   console.log('Clicked: ', event);
// });

// Example 2
// let newSub = observable.pipe(scan((count) => count + 1, 0));

// newSub.subscribe((data) => {
//   console.log(`Clicked ${data} times.`);
// });

// Example 3
fromEvent(btn, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
