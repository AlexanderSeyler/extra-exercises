class Cart {
    constructor() {
      this.items = [];
      this.discountCodes = [
        { code: "Discount1", isApplied: false, discountPercentage: 10 },
      ];
    }
  
    addItem(product, quantity) {
      if (!(product instanceof Product) || quantity <= 0) {
        console.error("Invalid product or quantity");
        return;
      }
  
      const existingItem = this.items.find(item => item.product === product);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    updateQuantity(productId, newQuantity) {
      const item = this.items.find(item => item.product.id === productId);
  
      if (item) {
        item.quantity = newQuantity;
      }
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => {
        const price = item.product.getSalePrice();
        return total + price * item.quantity;
      }, 0);
    }
  
    applyDiscountCode(code) {
      const discountCode = this.discountCodes.find(dc => dc.code === code);
  
      if (discountCode) {
        discountCode.isApplied = true;
  
        this.items.forEach(item => item.product.applyDiscount(discountCode.discountPercentage));
      }
    }
  }
  
  class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.isOnSale = false;
    }
  
    getSalePrice() {
      return this.isOnSale ? this.constructor.salePrice : this.price;
    }
  
    applyDiscount(discountPercentage) {
      this.price *= 1 - discountPercentage / 100;
    }
  }

  class Book extends Product {
    constructor(id, title, author, price) {
      super(id, title, price);
      this.author = author;
    }
  
    static salePrice = 15;
  
    getSalePrice() {
      return this.isOnSale ? this.constructor.salePrice : this.price;
    }
  }
  class Tshirt extends Product {
    constructor(id, title, price) {
      super(id, title, price);
    }
  
    static salePrice = 15;
  
    getSalePrice() {
      return this.isOnSale ? this.constructor.salePrice : this.price;
    }
  }

//8.1
const laptop = new Product(1, 'Laptop', 800);
const tv = new Product(2, 'TV', 500);
const phone = new Product(3, 'Phone', 300);

const shoppingCart = new Cart();

shoppingCart.addItem(laptop, 2);
shoppingCart.addItem(tv, 1);

console.log('Current items in the cart:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});

shoppingCart.removeItem(1);

shoppingCart.updateQuantity(2, 3);

console.log('Updated items in the cart:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});

shoppingCart.applyDiscountCode('Discount1');

const totalPrice = shoppingCart.calculateTotal();
console.log('Total Price:', totalPrice);

//8.7
const tv2 = new Product(4, 'TV', 500); 
const tshirt = new Tshirt(5, 'T-Shirt', 20); 
const book = new Book(6, 'Book', 'Author', 25); 

shoppingCart.addItem(tv2, 3);
shoppingCart.addItem(tshirt, 1);

console.log('Cart total after adding TVs and T-Shirt:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});
console.log('Total Price:', shoppingCart.calculateTotal());

shoppingCart.sortItems();

console.log('Cart total after sorting:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});
console.log('Total Price:', shoppingCart.calculateTotal());

shoppingCart.applyDiscountCode('Discount1');

console.log('Cart total after applying discount code:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});
console.log('Total Price:', shoppingCart.calculateTotal());

const books = new Book(7, 'Book', 'Author', 25);
books.isOnSale = true;
shoppingCart.addItem(books, 4);

console.log('Cart total after adding books (on sale):');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});
console.log('Total Price:', shoppingCart.calculateTotal());

shoppingCart.removeItem(1);

console.log('Cart total after removing 2 TVs:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});
console.log('Total Price:', shoppingCart.calculateTotal());

shoppingCart.sortItems();

console.log('Cart total after sorting again:');
shoppingCart.items.forEach(item => {
  console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`);
});
console.log('Total Price:', shoppingCart.calculateTotal());