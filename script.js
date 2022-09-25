var noOfApples = 0;
function increaseApple() {
  this.noOfApples++;
  console.log(this);
}
increaseApple();
increaseApple();
console.log(noOfApples);


let counter = {
  count: 0,
  increment: function () {
    counter.count++;
  }
}
counter.increment();
counter.increment();
console.log(counter.count);

let counter_ = createCounter();
let counter1 = createCounter();
function createCounter() {
  return {
    count: 0,
    increment: function () {
      counter_.count++;
    }
  }
}
counter1.increment();
counter1.increment();
console.log(counter1.count);



let counter2 = createCounterNew();
function createCounterNew() {
  return {
    count: 0,
    increment: function () {
      this.count++;
    }
  }
}
counter2.increment();
counter2.increment();
counter2.increment();
console.log(counter2.count);

var noOfApples = 0;
function increaseApple() {
  this.noOfApples++;
  console.log(this);
}
increaseApple();
increaseApple();
console.log(noOfApples);


function Car(name) {
  this.name = name;
  this.start = function () {
    console.log(this.name + ' started');
    console.log(this);
  }
}
let swift = new Car('Swift');
console.log(swift);
swift.start();
// let i20 = new Car('i20');
// i20.start();

function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log('Hello, ' + this.name);
  }
}
let vikas = Person('vikas');
console.log(name);