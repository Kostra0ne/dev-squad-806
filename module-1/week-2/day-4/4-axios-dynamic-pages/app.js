const buttons = document.querySelectorAll(".btn");
const gameElement = document.getElementById("game");

function loadPageContent(evt) {
  axios
    .get("/views/" + evt.target.id + ".html")
    .then((res) => {
      gameElement.innerHTML = res.data;
    })
    .catch((err) => {
      console.error(err);
    });
}

buttons.forEach((btn) => {
  btn.onclick = loadPageContent;
});
