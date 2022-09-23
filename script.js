// Factory function
function product(itemName, price, discount, itemCode) {
  return {
    itemName: itemName,
    price: price,
    discount: discount,
    itemCode: itemCode
  }
}

const football = product('football', 800, 10, 'F776688');

// Constructor function

function Product1(itemName, price, discount, itemCode) {
  this.itemName = itemName;
  this.price = price;
  this.discount = discount;
  this.itemCode = itemCode;
  this.getDiscount = function () {
    return this.price * (this.discount / 100);
  }
}

const mobile = new Product1('Moto G52', 1400, 9, 'HL9kN0NNK');
console.log(mobile.getDiscount()) 