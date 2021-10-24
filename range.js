import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Range returns an Observable
const observable1 = range(1, 20);

// Map and filter operators also returns an Observable which transforms the emitted values from Range Observable
// Pipe function is used to concat multiple operator functions
// Operators transforms an Observable to another Observable. Emitted values will be transformed.
const observable2 = observable1.pipe(
  filter((x) => x % 2 === 0) // Even number filtering
);

const observable3 = observable1.pipe(
  filter((x) => x % 2 === 0), // Even number filtering
  map((x) => x * 2) // Multiplied the filtered number with 2
);

// observable1.subscribe((data) => {
//   console.log(data); // Range of numbers form 1 to 20
// });

// observable2.subscribe(data => {
//   console.log(data);  // Range of even numbers form 1 to 20
// });

observable3.subscribe((data) => {
  console.log(data); // Even numbers multiplied by 2
});
