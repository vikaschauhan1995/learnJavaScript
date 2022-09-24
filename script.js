const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.push(9);
console.log(arr1);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2.pop();
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
arr3.unshift(10);
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
arr3.shift();
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr5.indexOf(5));


const arr6 = [1, 2, 3, 4, 4, 3, 1, 3, 4, 5, 6, 7];
console.log(arr6.lastIndexOf(3));


const arr7 = [1, 2, 3, 4, 4, 3, 1, 3, 4, 5, 6, 7];
console.log(arr7.includes(1));
console.log(arr7.includes(10));
console.log(arr7.includes(1, 7))

// find
const arr8 = [1, 2, 3, 4, 4, 3, 1, 3, 4, 5, 6, 7];
let arr8_ = arr8.find(i => i > 1)
console.log(arr8_);

const persons = [
  { name: "vikas", age: 27 },
  { name: "anuj", age: 28 },
  { name: "hulkhoggen", age: 38 }
];
let persons_ = persons.find(i => {
  return i.age > 28;
});
console.log(persons_)

const arr9 = [1, 2, 3, 4];
const arr10 = [5, 6, 7, 8];
const concatinated = arr9.concat(arr10);

console.log(concatinated);

console.log(concatinated.slice(2));
console.log(concatinated.slice(2, 6));

const combineArrays = [...arr9, ...arr10];
console.log(combineArrays);
console.log([...arr9, "vikas"]);


// for of
const names = ["vikas", "anuj", "mukesh", "ranveer"];
for (let n of names) {
  console.log(n);
}

// forEach
names.forEach((n, index) => {
  console.log(index + " : " + n + "\n");
})

const student = ["V", "i", "k", "a", "s"];
console.log(student.join(""));


const student1 = "V_i_k_a_s";
console.log(student1.split("_"));


const cities = [
  { name: "Delhi", population: 40 },
  { name: "Mumbai", population: 50 },
  { name: "UP", population: 33 },
  { name: "MP", population: 55 },
  { name: "Karnataka", population: 90 }
];
const filteredArray = cities.filter((c, i) => {
  return c.population > 50
});
console.log(filteredArray);

const makeDoublePopulation = cities.map(c => {
  const x = c;
  x["population"] = c.population * 2
  return x;
});
console.log(makeDoublePopulation);