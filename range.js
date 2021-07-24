import { range } from "rxjs";
import { map, filter } from "rxjs/operators";

// Range returns an Observable
const subscription1 = range(1, 20);

// Map and filter operators also returns an Observable which transforms the emitted values from Range Observable
// Pipe function is used to concat multiple operator functions
// Operators transforms an Observable to another Observable. Emitted values will be transformed.
const subscription2 = subscription1.pipe(
  filter(x => x % 2 === 0) // Even number filtering
);

const subscription3 = subscription1.pipe(
  filter(x => x % 2 === 0), // Even number filtering
  map(x => x * 2) // Multiplied the filtered number with 2
);

// subscription1.subscribe(data => {
//   console.log(data);  // Range of numbers form 1 to 20
// });

// subscription2.subscribe(data => {
//   console.log(data);  // Range of even numbers form 1 to 20
// });

subscription3.subscribe(data => {
  console.log(data); // Even numbers multiplied by 2
});
