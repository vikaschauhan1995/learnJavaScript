class Product {
  constructor(name, price, discount, barcode) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.barcode = barcode;
  }
}

const pencil = new Product("Pencil", 3, 0.1, 'LJL;J9F9F9V');
console.log(pencil);

const Product1 = class Product2 {
  constructor(name, price, discount, barcode) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.barcode = barcode;
  }
  getPrice() { return this.price; }
  set setPrice(value) { this.price = value; }
  get getDiscount() { return this.price * (this.discount / 100); }
}

const mobile = new Product1('Moto', 1300, 5, 'KAWEFKJWFJL');
console.log(mobile);
console.log(Product1.name);
console.log(mobile.getPrice());
mobile.setPrice = 1500;
console.log(mobile.getPrice());
console.log(mobile.getDiscount);



class WoodProduct {
  constructor(name) {
    console.log("Passed by WoodProduct");
    this.name = name;
  }
  get getName() {
    return this.name + " is a WoodProduct";
  }
}
class Furniture extends WoodProduct {
  constructor(name) {
    super(name);
  }
  get getName() {
    return this.name + " is a Furniture";
  }
}

const duster = new WoodProduct("Pencil");
const chair = new Furniture("Chair");

console.log(duster.getName);
console.log(chair.getName);