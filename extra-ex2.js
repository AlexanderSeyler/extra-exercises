//question 1

class Product {
    constructor(name, price, description) {
      this._name = name;
      this._price = price;
      this._description = description;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get price() {
      return this._price;
    }
  
    set price(newPrice) {
      this._price = newPrice;
    }
  
    get description() {
      return this._description;
    }
  
    set description(newDescription) {
      this._description = newDescription;
    }
  }
  

  const product = new Product('Example Product', 50, 'This is an example product.');
  console.log(product.name);
  console.log(product.price);
  console.log(product.description);
  
  product.name = 'New Product';
  console.log(product.name);

//question 2
class TV extends Product {
    constructor(name, price, description, screenSize) {
      super(name, price, description);
      this._screenSize = screenSize;
    }
  
    get screenSize() {
      return this._screenSize;
    }
  
    set screenSize(newSize) {
      this._screenSize = newSize;
    }
  }
  
  class Shirt extends Product {
    constructor(name, price, description, size) {
      super(name, price, description);
      this._size = size;
    }
  
    get size() {
      return this._size;
    }
  
    set size(newSize) {
      this._size = newSize;
    }
  }
  
  const tv = new TV('Smart TV', 500, 'A high-quality TV', 55);
  console.log(tv.name); 
  console.log(tv.price); 
  console.log(tv.description); 
  console.log(tv.screenSize); 
  
  const shirt = new Shirt('Casual Shirt', 30, 'Comfortable shirt', 'M');
  console.log(shirt.name); 
  console.log(shirt.price); 
  console.log(shirt.description); 
  console.log(shirt.size); 
//question 3
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  

  Book.prototype.displayInfo = function () {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  };
  

  const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
  book.displayInfo();
