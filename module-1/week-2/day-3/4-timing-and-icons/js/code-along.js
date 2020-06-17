const heartElement = document.getElementById("heart");
const batteryElement = document.getElementById("battery");
const emojiElement = document.getElementById("emoji");

// replace the innerHTMl of those divs with a unicode, provided by ƒontawesome. each unicode represents an icon
// examples : f004 (for a full heart) or f7a9 (for a broken heart)

/*
const unicodes = ["f004", "f7a9"]; // some heart icons ...
var index = 0; // start at zero (the array's first value's index)

setInterval(() => {
  // you must prefix each unicode with "&#x"
  heartElement.innerHTML = "&#x" + unicodes[index] + ";";
  // ... suffix the unicode with ";"
  if (index + 1 === unicodes.length) index = 0;
  // play with the index
  else index++; // to "move" between icons ;)
}, 1000); // the callback function will trigger every 1000ms

*/

// below : same logic applied to emojis
// const emojiUnicodes = ["f5b8", "f582", "f585", "f59a", "f58b"];
// var index2 = 0;

/*
setInterval(() => {
    emojiElement.innerHTML = "&#x" + emojiUnicodes[index2] + ";";
    if (index2 + 1 === emojiUnicodes.length) index2 = 0;
    else index2++;
}, 500);
*/

// but wait squad ... this is code duplication !!! :(
// we could transform this into a nice, reusable function :)
function animateFontawesomeIcons(target, unicodes, interval = 1000) {
  var index = 0;
  setInterval(() => {
    target.innerHTML = "&#x" + unicodes[index] + ";";
    if (index + 1 === unicodes.length) index = 0;
    else index++;
  }, interval);
}

animateFontawesomeIcons(heartElement, ["f004", "f7a9"]);
animateFontawesomeIcons(
  emojiElement,
  ["f5b8", "f582", "f585", "f59a", "f58b"],
  100
);
