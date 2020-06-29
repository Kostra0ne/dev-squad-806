import { StackDataStructure } from "./../src/StackDataStructure.js";

// DOM
const btnAdd = document.getElementById("btn_add");
const btnTake = document.getElementById("btn_take");
const inputUser = document.getElementById("user_input");
const cells = document.getElementById("cells_1");

// Constructor
const stack = new StackDataStructure(5);

(function displayCells(max) {
  cells.innerHTML = "";
  for (let i = 0; i < max; i += 1) cells.innerHTML += `<li class="cell"></li>`;
})(stack.MAX_SIZE); // IIFE can take parameters too ...


function createCell(mode, CSSSelector, text) {
  const target = cells.querySelector(CSSSelector);
  target.innerText = text;
  if (mode === "push") target.classList.add("is-active");
  else target.classList.remove("is-active");
}

function createSpecialCell(mode) {
  if (!cells.querySelector(`.cell.${mode}`)) {
    const li = document.createElement("li");
    li.className = `cell ${mode}`;
    li.innerText = mode.toUpperCase();
    return li;
  }
}

function checkSpecialCell(mode) {
  const li = cells.querySelector(`.cell.${mode}`);
  if (li) li.remove();
}

btnAdd.onclick = () => {
  if (stack.canPush()) {
    checkSpecialCell("underflow");
    const stackLen = stack.push(inputUser.value).length;
    createCell("push", `.cell:nth-last-of-type(${stackLen})`, inputUser.value);
  } else {
    const li = createSpecialCell("overflow");
    if (li) cells.insertBefore(li, cells.children[0]);
  }
};

btnTake.onclick = () => {
  if (!stack.isEmpty()) {
    checkSpecialCell("overflow");
    stack.pop();
    createCell("pop", ".cell:not(:empty)", "");
  } else {
    const li = createSpecialCell("underflow");
    if (li) cells.insertBefore(li, null);
  }
};
