class Product {
  constructor(infos) {
    // here we are hydrating the object
    if (!infos.brand || !infos.price || !infos.name)
      throw new Error("Brand + Name + Price are mandatory");

    this.name = infos.name;
    this.price = infos.price;
    this.brand = infos.brand;
    this.avgRate = infos.avgRate;
    this.img =
      infos.img ||
      "https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg";
    this.ref = infos.ref;
    this.color = infos.color;
    this.desc = infos.desc;
    this.category = infos.category;
  }

  getProductBasicInfos() {
    return `${this.name} is a product made by ${this.brand}, it costs ${this.price} euros`;
  }

  setPrice(newPrice) {
    if (isNaN(newPrice))
      throw new TypeError("Sorry, i need a number there ><*");
    this.price = newPrice;
  }

  setBrand(newBrand) {
    this.brand = newBrand;
  }
}

const pixel4 = new Product({
  name: "Google Pixel 4",
  brand: "Google",
  price: 399,
  avgRate: 4.2,
  ref: "GPix242020202",
  color: "mate dark gray",
  desc:
    "a cool and 'affordable smartphone, including the latest android version",
  category: "phones",
});

const sneakers = new Product({
  name: "Air max one",
  brand: "Nike",
  price: 150,
  avgRate: 4.7,
  ref: "DHKSDNSDSLD",
  color: "black white",
  desc: "cool and comfy sport shoes",
  category: "shoes",
});

console.log(sneakers.getProductBasicInfos());
pixel4.setBrand("Alphabet");
pixel4.price = "foo";
sneakers.setPrice(170);
console.log(pixel4.getProductBasicInfos());
console.log(sneakers.getProductBasicInfos());

/// inheritance : expDate

class FoodProduct extends Product {
  constructor(infos) {
    super(infos); // super is a link to the parent class

    if (!infos.expDate) throw new Error("expDate is mandatory");

    this.expDate = infos.expDate;
  }
}

const cupcake = new FoodProduct({
  name: "cupcake",
  price: 5,
  brand: "acme",
  expDate: new Date(),
});

console.log(cupcake);

console.log(cupcake.getProductBasicInfos());

// const iceCream = new FoodProduct({
//   name: "Cookies and Cream",
//   price: 6,
//   brand: "Hagen Däas",
// });

class Person {
  constructor(name, favProduct) {
    this.name = name;
    this.favoriteProduct = favProduct;
  }
}

const person1 = new Person(
  "Toto",
  new Product({ name: "switch", brand: "nintendo", price: 299 })
);

console.log(person1)
console.log(person1.favoriteProduct.getProductBasicInfos());

console.log("----------");
console.log(cupcake instanceof Product)