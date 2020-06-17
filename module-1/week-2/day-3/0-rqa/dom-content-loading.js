
// use a tag <script type="module"></script> to access the dom elements easily
const btn = document.getElementById("my-btn");
console.log(btn);
btn.onclick = () => {};

// else ....btn will be null (not there yet)

// possible workarounds =>

// there is only ONE onload event : so you can this technique only once in you page (in one js file)
// window.onload = () => {
//     const btn = document.getElementById("my-btn");
//     console.log(btn);
//     btn.onclick = () => {};
// };

// this can be use as many time as needed
// window.addEventListener("DOMContentLoaded", () => {
//     const btn = document.getElementById("my-btn");
//     console.log(btn);
//     btn.onclick = () => {};
// });
