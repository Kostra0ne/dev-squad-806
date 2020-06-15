function listHTMLObjects() {
  const blockOne = document.getElementById("block-1");
  console.log(blockOne);
  console.log(blockOne.id);
  // there are many accessible properties for these JS->HTML object
  //   blockOne.id = "foo";

  // modify a text node
  //   blockOne.textContent += " foo bar baz";

  // add some tags + text in an html object
  blockOne.innerHTML += " <p>foo bar baz</p>";

  // adding some inline style
  blockOne.style.border = "2px dashed";
  blockOne.style.background = "dodgerblue";
  blockOne.style.color = "whitesmoke";

  // play with css
  // add some css classes
  const blockThree = document.getElementById("block-3");
  blockThree.className += " is-active";

  // when dealing with moe complex css interacions, the classList API is better
  //   add( String [, String] )
  blockThree.classList.add("is-selected", "bar");

  //   remove( String [, String] )
  blockThree.classList.remove("is-active");
  //   item( Number )
  console.log(blockThree.classList.item(1));
  //   toggle( String [, force] )

  //   contains( String )
  console.log(blockThree.classList.contains("bar"), blockThree.classList.contains("is-active"), );
  //   replace( oldClass, newClass )

  if (blockThree.classList.contains("bar")) {
      
  } else {
    blockThree.classList.replace("bar", "baz");
  }
}


function howToSelectHTMLTags() {
    const paragraphs = document.getElementsByTagName("p"); // returns HTML Collection
    // HTML Collection are "Array like" data structures 
    console.log(paragraphs);
    console.log(paragraphs[0]);
    console.log(paragraphs[paragraphs.length - 1]);
    const divs = document.getElementsByTagName("div");
    console.log("---------");
    console.log(divs);

    const blocks = document.getElementsByClassName("block"); // HTML Collection
    console.log(blocks);

    const body = document.querySelector("body");
    const divBlock = document.querySelector("div.block");
    const lastP = document.querySelector("p:last-of-type");

    const allBlocks = document.querySelectorAll(".block"); // nodeList
    console.log(allBlocks);
    console.log(typeof allBlocks[0]);
    
}

// listHTMLObjects is a callback
// window.addEventListener("DOMContentLoaded", listHTMLObjects);
// window.onload = listHTMLObjects; // this is the shortcut for line above

listHTMLObjects();
howToSelectHTMLTags();