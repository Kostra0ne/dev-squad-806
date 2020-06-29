function setText(text, timing, callback) {
  setTimeout(() => {
    callback(text);
  }, timing);
}

function displayText(text) {
  document.getElementById("target-text").innerHTML = text;
}

document.getElementById("do-action-in-close-future").onclick = () => {
    
    displayText('<i class="fa fa-spin">&#xf110;</i>');
    
    setText("foo bar baz", 2000, displayText);
};
