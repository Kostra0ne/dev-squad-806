// DOM ELEMENTS
const rangeElement = document.getElementById("input-range");
const displayElement = document.getElementById("current-range-value");

// EVENT HANDLER
function displayRangeValue(evt) {
  // get the current html widget's vaue
  const currValue = evt.target.value;
  // display it on the page
  displayElement.textContent = currValue;
  // reset the class to mirror the value's change
  if (currValue <= 33) {
    displayElement.className = "value danger";
  } else if (currValue > 33 && currValue <= 66) {
    displayElement.className = "value warning";
  } else {
    displayElement.className = "value success";
  }
}

// EVE?T LISTENER
rangeElement.oninput = displayRangeValue; // execute te function when the user inputs a new value on the html widget
