const products = [
  { name: "phone", price: 500, inStock: true },
  { name: "shoe", price: 120, inStock: false },
  { name: "shirt", price: 80, inStock: false },
  { name: "pen", price: 30, inStock: true },
];

const listElement = document.getElementById("price");
const totalElement = document.getElementById("total");

function printProduct(p) {
  listElement.innerHTML += `<li>${p.name} - ${p.price}</li>`;
}

function printTotal() {
  totalElement.textContent = products.reduce((acc, p) => {
    // if product is in stock return accumulator + product.price
    // else return accumulator
    return p.inStock ? acc + p.price : acc;
  }, 0);
}

products.forEach((product) => {
  // if product is in stock, display it on the html document
  if (product.inStock) printProduct(product);
});

// when done printing, display the total price of in stock products
printTotal();
