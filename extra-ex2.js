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
  console.log(product.name)

