// target usefull element(s) (used at several locations)
const blocks = document.querySelectorAll(".block");

// this functions prints one block's info
function printBlockInfo(block) {
  console.log(`id: ${block.id} - CSS classes: ${block.className}`);
}

// get one element by id and change it's text-content
function printBlockCount() {
  const resElement = document.getElementById("blocks-count");
  resElement.textContent = `This document contains ${blocks.length} blocks`;
}

// loop through all the block
blocks.forEach((b) => printBlockInfo(b)); // pass each block to the printBlockInfo function

printBlockCount(); 
