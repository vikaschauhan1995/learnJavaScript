let square = {
  side: 5,
  get area() {
    return this.side * this.side;
  }
};
console.log(square.area);


class Square {
  constructor(side) {
    this.side = side;
  }
  get area() {
    return this.side * this.side;
  }
}
const square5 = new Square(5);
console.log(square5.area);

const person = ["vikas", "anuj", "yogesh"];
const personJoined = person.join("-");
console.log(personJoined);


console.log(stringConcat("-", "vikas", "anuj", "yogesh"));

function stringConcat(seperator, ...args) {
  let x = '';
  const a = args.forEach((s, i) => {
    x += s
    if (args.length - 1 > i) {
      x += seperator
    }
  });
  return x;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...other] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(other);

function findMatchSticks(x) {
  if (x <= 0) {
    return 0;
  }
  return (x * 5) + 1;
}

console.log(findMatchSticks(0));
console.log(findMatchSticks(1));
console.log(findMatchSticks(2));
console.log(findMatchSticks(3));
console.log(findMatchSticks(4));
console.log(findMatchSticks(5));
console.log(findMatchSticks(87));

// 6, 11, 16
