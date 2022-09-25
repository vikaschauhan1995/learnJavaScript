console.log(i);
var i = 10;

sayHello();
function sayHello() {
  console.log("Hello");
}


// console.log(g);// Uncaught referenceError:
let g = 10;


// helloAgain(); // helloAgain ins not a function
var helloAgain = function () {
  console.log("Hello Again");
}


// begind the scene it looks like 
// var helloAgain = undefined;
// helloAgain();

let foo = "bar";
if (true) {
  let foo = "baz";
  console.log(foo);
}
console.log(foo);