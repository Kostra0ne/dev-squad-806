const ironCart = (function() {
  "use strict";

  var productList;

  function appendProduct(infos) {
    // step 1 : create all row elements
    const row = document.createElement("div");
    const label = document.createElement("span");
    const price = document.createElement("span");
    const quantityLabel = document.createElement("span");
    const quantity = document.createElement("input");
    const priceTotal = document.createElement("span");
    const button = document.createElement("button");
    const qty = 1;
    // step 2 : setup row's elements
    quantity.type = "number";
    row.className = "row product";
    label.className = "label";
    label.textContent = infos.name;
    price.className = "unit-price";
    price.textContent = infos.price;
    quantityLabel.className = "quantity";
    quantityLabel.textContent = "QTY";
    quantity.className = "input quantity";
    quantity.value = qty;
    quantity.min = 0;
    quantity.oninput = updateRowPrice;
    priceTotal.className = "total-price";
    priceTotal.textContent = `$${qty * infos.price}`;
    button.className = "btn delete";
    button.textContent = "delete";
    button.onclick = deleteProduct;
    // step 3 : add extra markup
    price.innerHTML = `<span class="currency">$</span><span class="val">${
      infos.price
    }</span>`;
    // build a product row
    row.appendChild(label);
    row.appendChild(price);
    row.appendChild(quantityLabel);
    row.appendChild(quantity);
    row.appendChild(priceTotal);
    row.appendChild(button);
    productList.appendChild(row);
  }

  function createProduct(evt) {
    evt.preventDefault(); // prevents page refresh on form submission
    const nameElement = document.getElementById("new_product_name");
    const priceElement = document.getElementById("new_product_price");

    if (productList.children[0].className === "empty-list")
      productList.innerHTML = "";

    appendProduct({
      name: nameElement.value,
      price: Number(priceElement.value)
    });
    updateTotalPrice();
  }

  function deleteProduct(evt) {
    const target = evt.target || evt.srcElement;
    target.parentElement.remove();
    if (productList.children.length === 0)
      productList.innerHTML = '<span class="empty-list">No products yet</span>';
    updateTotalPrice();
  }

  function updateTotalPrice() {
    const totalEl = document.getElementById("price_total");
    const rowTotalEls = [...document.querySelectorAll(".row .total-price")];

    totalEl.textContent = rowTotalEls.reduce(
      (acc, el) => acc + Number(el.textContent.slice(1)),
      0
    );
  }

  function updateRowPrice(e) {
    const quantity = e.target || e.srcElement;
    const priceEl = quantity.parentElement.querySelector(".unit-price");
    const totalEl = quantity.nextElementSibling;
    const priceU = Number(priceEl.textContent.slice(1));
    totalEl.textContent = `$${priceU * quantity.value}`;
    updateTotalPrice();
  }

  function start() {
    // there is only one 'load' event per document
    productList = document.getElementById("list_products");
    document.getElementById("btn_new_product").onclick = createProduct;
  }

  return { start };
})();

window.addEventListener("DOMContentLoaded", ironCart.start);
