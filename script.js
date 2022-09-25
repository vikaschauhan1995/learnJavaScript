


var name = "Vikas";

var x = 22;

// Global scope
function parent() {
  var x = 1;
  console.log(x);
  function childOfFirst() {
    var x = 2;
    console.log(x);
  }
  childOfFirst();
}
parent();

function second() {
  console.log(x);
}
second();



// block scope
var i = 10;
{
  var i = 1;
  console.log(i);
}
console.log(i);


let j = 10;
{
  let j = 1;
  console.log(j);
}
console.log(j);




if (true) {
  let a = "a";
  var b = "b";
  const c = "c";
}
// console.log(a); // undefined
console.log(b);
// console.log(c); // undefined



// Lexical Scope
function Dada() {
  var name = "Dada Kumar";
  // like is not accessible here
  function Papa() {
    // name is accessible here
    // like is not accessible here
    console.log("Papa kumar son of " + name);
    function Beta() {
      // name is also accessible here
      console.log("Beta kumar grandchild of " + name);
      var like = 'Coding';
    }
    Beta();
  }
  Papa()
}
Dada();