const btn = document.getElementById("do-action-in-close-future");
const target = document.getElementById("target-text");

function setDelayedText(text = "hey hey hey !!!", timing = 1000) {
  // getting the text after a timeout
  return new Promise((resolve, reject) => {

    if (typeof text !== "string") reject("Text should be of type string");
    
    setTimeout(() => {
      resolve(text);
    }, timing);
  });
}

// inserts the text in the target element
const displayText = (text) => target.innerHTML = text;

function handleClick() {
  // setDelayedText().then(displayText);
  displayText('<i class="fa fa-spin">&#xf110;</i>');

  setDelayedText("JS is fun...", 3000).then((text) => {

    displayText(text);

    setDelayedText("Async is awesome", 1500).then(displayText);
  });
}

try {
  btn.onclick = handleClick;
} catch (err) {
  console.error(err);
}


