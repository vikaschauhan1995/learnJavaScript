const course = {
  name: "vikas",
  age: 27
};
console.log(course);
course.height = 5.9;

function createCource(title) {
  return {
    title: title,
    name: "vikas"
  };
}
const course1 = createCource("JavaScript");
console.log(course1);
console.log(course1.title);

function Course(title) {
  this.title = title;
  this.name = "vikas";
}
const person1 = new Course("Python");
console.log(person1);

function A(b) {
  this.b = b;
  this.c = "c";
}
const a1 = new A("bb");
console.log(a1); // {b:'bb',c:'c'}

function B(a) {
  this.a = a;
  this.c = "c";
  return this;
}
const b1 = new B("aa");
console.log(b1);