const blocks = document.getElementById("blocks"); // parent div containing all created blocks
const inputColor = document.getElementById("input_color"); // color picker
const inputBlocksCount = document.getElementById("input_blocks_count"); // amount of block(s) to create

function createBlock() {
  const newBlock = document.createElement("div"); // creates a new div element
  newBlock.className = "block"; // adds a CSS class on the newly created div
  newBlock.style.background = inputColor.value; // set background using input:color's value
  newBlock.style.color = getContrastYIQ(inputColor.value); // set black/white text according to background
  newBlock.onclick = toggleActiveStatus; // listen/handle clicks on the new block
  return newBlock; // mandatory here : return the new block object !!!
}

function handleCreate(nbBlocks) {
  // this function is executed each time a user clicks on create button
  // step 1 => create a loop that will iterate nbBlocks times
  for (let i = 0; i < nbBlocks; i += 1) {
    // step 2 => we'll get a fresh new block on each function call
    const block = createBlock(); // create returns an object
    // step 3 => we now have the block, so let's add it to the document
    // appendChild adds a new child Elemend on any targeted parent
    // blocks here, is the parent !
    blocks.appendChild(block);
  }
}

function handleRemoveSelected(blocksToRemove) {
  blocksToRemove.forEach(block => block.remove());
}

function handleReset() {
  blocks.innerHTML = ""; // remove all the blocks div content
}

function setBlocksNumber() {
  // set the text (number, count) of each block
  [...blocks.children].forEach((b, i) => (b.textContent = i + 1));

  // or one amongst many other alternative syntaxes
  // const blocks = blocks.querySelectorAll(".block");
  // blocks.forEach(function(b, i) {
  //   b.textContent = i + 1;
  // });
}

function toggleActiveStatus(evt) {
  const clickedBlock = evt.target;  
  clickedBlock.classList.toggle("is-selected"); // toggle a CSS class
}

/**
 * @author radu122
 * @source https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
 */
function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

document.getElementById("btn_create").onclick = () => { // create button
  handleCreate(inputBlocksCount.value);
  setBlocksNumber();
};

document.getElementById("btn_remove").onclick = () => { // remove selected blocks button
  handleRemoveSelected(blocks.querySelectorAll(".block.is-selected"));
  setBlockNumbers();
}

document.getElementById("btn_reset").onclick = handleReset; // reset button
