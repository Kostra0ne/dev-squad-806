// target usefull element(s) (used at several locations)
const blocks = document.querySelectorAll(".block"); // this will return a nodeList of all matching nodes

// this functions prints one block's info
function printBlockInfo(block) {
  console.log(`id: ${block.id} - CSS classes: ${block.className}`); // just a log ...
}

// get one element by id and change it's text-content
function printBlockCount() {
  const resElement = document.getElementById("blocks-count"); // target an element by it's id
  resElement.textContent = `This document contains ${blocks.length} blocks`;//update the text content
}

function toggleBackground(evt) {
  // evt.target represents the clicked block
  evt.target.classList.toggle("is-selected"); // add OR remove the is-selected css class
}

// loop through all the block
blocks.forEach((b) => { 
  b.onclick = toggleBackground; // on click on each block, run this callback
  printBlockInfo(b); // pass each block to the printBlockInfo function
}); 

printBlockCount(); // run the function to display the length


