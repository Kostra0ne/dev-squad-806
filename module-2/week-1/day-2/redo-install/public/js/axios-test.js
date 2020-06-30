function fetchData(evt) {
  axios
    .get("/users")
    .then((res) => {
      res.data.forEach((user) => {
        document.getElementById("axios-target").innerHTML += user + "<br>";
      });
    })
    .catch((err) => console.error(err));
}

document.getElementById("btn-axios").onclick = fetchData;
