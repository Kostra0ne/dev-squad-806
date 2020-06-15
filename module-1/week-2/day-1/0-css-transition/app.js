const block = document.getElementById("block-1");

block.onmouseenter = () => block.classList.add("is-active");
block.onmouseleave = () => block.classList.remove("is-active");
