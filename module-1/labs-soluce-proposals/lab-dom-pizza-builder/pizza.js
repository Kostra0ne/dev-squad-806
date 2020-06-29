// wrapped the code in a IIFE to avoid exposing our variables/functions to the global scope
var pizzaBuilder = (function() {
  
  const basePrice = 10;

  const state = {
    // i've merged var ingredients in the state :)
    pepperonni: { isActive: true, name: "Pepperonni", price: 1 },
    mushrooms: { isActive: true, name: "Mushrooms", price: 1 },
    greenPeppers: { isActive: true, name: "Green Peppers", price: 1 },
    whiteSauce: { isActive: true, name: "White sauce", price: 3 },
    glutenFreeCrust: { isActive: false, name: "Gluten-free crust", price: 5 }
  };

  function renderPrice() {
    var total = 0;
    
    const list = document.getElementById("list_ingredients_prices");
    const price = document.querySelector(".panel.price strong");
    list.innerHTML = "";

    for (let topping in state) {
      if (state[topping].isActive) {
        list.innerHTML += `<li>$${state[topping].price} ${state[
          topping
        ].name.toLowerCase()}</li>`;
        total += state[topping].price;
      }
    }

    price.textContent = `$${basePrice + total}`;
  }

  function renderIngredient(ingredient, targetClass) {
    document.querySelectorAll("." + targetClass).forEach(element => {
      if (state[ingredient].isActive) element.style.visibility = "visible";
      else element.style.visibility = "hidden";
    });
  }

  function renderCrust() {
    document.querySelector(".crust").classList.toggle("crust-gluten-free");
  }

  function filterIngredient(evt) {
    const btn = evt.target || evt.srcElement; // cross browser way to get the event source
    const ingredient = btn.getAttribute("data-ingredient"); // check the custom attribute on HTML button
    btn.classList.toggle("active"); // add OR remove active class depending on the class absence/presence
    state[ingredient].isActive = !state[ingredient].isActive; // use direct indexing to access the
    if (ingredient === "glutenFreeCrust") renderCrust();
    else renderIngredient(ingredient, btn.getAttribute("data-css"));
    renderPrice(ingredient);
  }

  function start() {
    renderPrice();
    document
      .querySelectorAll(".btn")
      .forEach(btn => (btn.onclick = filterIngredient));
  }

  return { start };
})();

window.addEventListener("DOMContentLoaded", pizzaBuilder.start);
