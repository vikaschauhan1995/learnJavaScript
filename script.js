let animal = {
  name: "Lion",
  legs: 4
};

for (let key in animal) {
  console.log(key);
}

console.log("================================");

let names = ["Vikas", "Anuj", "Kapil", "Ravi"];
for (let index in names) {
  console.log(index + " : " + names[index]);
}

console.log("================================")

for (let name of names) {
  console.log(name);
}