// get the burger by id
// listen to click on it
// the callback will toggle a is active class on a secondary mobile navbar

const burger = document.getElementById("burger");
const navMobile = document.getElementById("nav-mobile");

function toggleNavMobile() {
  navMobile.classList.toggle("is-active");
}

burger.onclick = toggleNavMobile;
