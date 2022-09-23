

const course = {
  lecture: 10,
  section: 3,
  title: 'JavaScript',
  notes: {
    introduction: "Welcome to JS course"
  },
  enrollment() {
    console.log("Your are successfully enrolled");
  }
};

course.enrollment();
console.log(course);

course.price = 999;

function createCourse() {
  return {
    lecture: 10,
    section: 3,
    title: 'JavaScript',
    notes: {
      introduction: "Welcome to JS course"
    },
    enrollment() {
      console.log("Your are successfully enrolled");
    }
  }
}

const course_1 = createCourse();
console.log(course_1);


// Factory function
function createCourse1(title) {
  return {
    title: title,
    enrollment() {
      console.log("Your are successfully enrolled");
    }
  };
}

const createCourse_1 = createCourse1("Javascript");
console.log(createCourse_1);


// Constructor function

function Course(title) {
  this.title = title;
  this.enroll = function () {
    console.log("Your are successfully enrolled");
  }
}
const course_one = new Course("JavaScript");
console.log(course_one);

function Person(name) {
  this.name = name;
  this.age = 27;
}
const vikas = new Person("Vikas");
vikas.checkEnrollment = function () {
  console.log("You are enrolled");
}
delete vikas.name;
console.log(vikas);

console.log(vikas.constructor);
console.log(createCourse_1.constructor);

console.log("--------------------------------------------------------");

// Primitive Data type
let numberOne = 10;
// pass by value
let numberTwo = numberOne;
numberOne = 15;
console.log(numberOne);
console.log(numberTwo);

// Referene Data type
const objOne = { number: 10 };
// Pass by reference
const objTwo = objOne;
objOne.number = 15;

console.log(objOne);
console.log(objTwo);


const company = {
  name: "Samsung",
  numberOfEmployees: 10,
};
const companyOne = { ...company };
companyOne.name = "Apple";

console.log(company);
console.log(companyOne);


const country = {
  name: "India",
  gdp: "2.3T"
};
// copying the variable
const countryOne = Object.assign({}, country);
countryOne.name = "Japan";
console.log(country);
console.log(countryOne);

console.log("--------------------------------");
// for in loop
for (let key in country) {
  console.log(key);
}

// for of loop
for (let key of Object.keys(country)) {
  console.log(key);
}