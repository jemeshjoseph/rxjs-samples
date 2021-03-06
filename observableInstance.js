import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next(1);
  observer.next('This is a response');
  observer.next(true);
  // observer.error('Error happens'); // Error blocks further execution of Observables (Uncomment it to view the working.)
  observer.next([1, 2, 3, 4, 5]);
  observer.complete(); // Calls the complete block inside subscriber/observer
});

// Format 1
// observable.subscribe((data) => {
//   console.log('Response: ', data);
// }, (error) => {
//   console.log('error: ', error);
// }, () => {
//   console.log('Completed');
// });

// OR

// Format 2
// observable.subscribe({
//   next(data) {
//     console.log('Response: ', data);
//   },
//   error(err) {
//     console.log('error: ', err);
//   },
//   complete() {
//     console.log('Completed');
//   }
// });

// OR

// Format 3
observable.subscribe({
  next: (data) => {
    console.log('Response: ', data);
  },
  error: (err) => {
    console.log('error: ', err);
  },
  complete: () => {
    console.log('Completed');
  },
});
