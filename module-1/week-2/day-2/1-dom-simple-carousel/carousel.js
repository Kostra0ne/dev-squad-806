// DOM ELEMENTS
const carouselElement = document.getElementById("carousel");
const btns = document.querySelectorAll(".btn");
const img = carouselElement.querySelector(".img");

// NEEDED INFOS
const imgs = [
  "fractal-1.jpeg", // 0
  "fractal-2.jpeg", // 1
  "fractal-3.jpeg", // 2
  "fractal-4.jpeg", // 3
];
var count = 0;

function handleClick(evt) {
  // in a event handler, this, by default, refers to the object that triggered the event
  const btn = evt.target;
  if (btn.id == "btn-prev") {
    count = count === 0 ? imgs.length - 1 : count - 1;
  } else {
    count += 1;
    if (count === imgs.length) count = 0;
  }
  img.src = `./imgs/${imgs[count]}`;
}

function handleClickShorter(evt) {
  const btn = evt.target;
  if (btn.id == "btn-prev") count = count === 0 ? imgs.length - 1 : count - 1;
  else count = count === imgs.length - 1 ? 0 : count + 1;
  img.src = `./imgs/${imgs[count]}`;
}

btns.forEach((btn) => (btn.onclick = handleClick));

/*  OTHER OPTIONS  */

/* longer syntax of previous loop below : */

// btns.forEach(function (btn) {
//   btn.addEventListener("click", handleClick);
// });

/* without a loop ? ^^ */

// const btnPrev = document.getElementById("btn-prev");
// const btnNext = document.getElementById("btn-next");
// btnPrev.onclick = handleClick;
// btnNext.onclick = handleClick;

/*  with html COllections */
// const btnsCollection = document.getElementsByClassName("btn");

/* with a for loop ? ^^ */

// for (let i = 0; i < btnsCollection.length; i++) {
//   btnsCollection[i].onclick = handleClick;
// }

/*
  html collection don't implement forEach via their prototype (schema)
  here is a possible workaround =>
*/

// Array.from(btnsCollection).forEach(btn => btn.onclick = handleClick);
// [...btnsCollection].forEach(btn => btn.onclick = handleClick);
