const btnBg = document.getElementById("btn-toggle-bg");
const btnColor = document.getElementById("btn-toggle-color");
const btnVisible = document.getElementById("btn-toggle-visible");
const content = document.querySelector(".content");
// console.log(btnBg, btnColor, btnVisible); // checking if everything is ok

// event-handlers
function toggleBackground() {
  content.classList.toggle("is-active-bg");
  //   return content.style.backgroundColor === ""
  //   ? (content.style.backgroundColor = "red")
  //   : (content.style.backgroundColor = "");
}

function toggleColor() {
  content.classList.toggle("is-active-color");
  //********************************************/
  // sidenote : the code below is doing the action but it's fairly longer ...
  //********************************************/

  //   if (content.classList.contains("is-active-color")) {
  //     content.classList.remove("is-active-color");
  //   } else {
  //     content.classList.add("is-active-color");
  //   }
}

function toggleVisible(event) {
  // event, evt, e
  console.log(typeof event, event); // event is an implicit argument
  // any event-handler will get this evt arg automaticaly !!!
  content.classList.toggle("is-hidden");
}

// arg 1 : event-type
// arg 2 : is ALWAYS a callback function
btnBg.addEventListener("click", toggleBackground); // event-listener

// // DIY
// // do the same process with btnColor : to change the content's text color
btnColor.onclick = toggleColor;

btnVisible.onclick = toggleVisible;

window.onresize = function (evt) {
    console.log(evt);
};

// window.addEventListener("resize", function (evt) {
//     console.log(evt);
// });

