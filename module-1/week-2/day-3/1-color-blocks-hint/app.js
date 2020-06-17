const inputBlockCount = document.getElementById("block-count");
const inputBlockBg = document.getElementById("block-bg");
const btnCreate = document.getElementById("btn-create");
const blocksWrap = document.getElementById("blocks");
const allBlocks = document.getElementsByClassName("block");

function createBlock() {
  const bg = inputBlockBg.value;
  const markup = `<div class="block" style="background: ${bg};">${allBlocks.length + 1}</div>`;
  blocksWrap.innerHTML += markup;
}


btnCreate.onclick = createBlock;