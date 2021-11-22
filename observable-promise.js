//Promisse
const myPromise = new Promise(resolve => {    
    resolve('dog');
    resolve('cat');
    resolve('bird');
});
  
myPromise.then(result => {
    console.log('promise: ', result);
})
  

//Observable
const {Observable} = require("rxjs");

const observable = new Observable(subscriber  => {
    subscriber.next('dog');
    subscriber.next('cat');
    subscriber.next('bird');
});
  
observable
    //.filter(result => result === 'bird')
    //.subscribe(result => {
    //  console.log('observable: ', result);
    //});
    .subscribe({
        next(x) { console.log('observable: ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
      });
      