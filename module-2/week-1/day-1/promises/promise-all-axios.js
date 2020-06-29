const urls = [
  "https://api.chucknorris.io/jokes/random",
  "https://api.chucknorris.io/jokes/random?category=dev",
  "https://api.chucknorris.io/jokes/random?category=science",
  "https://api.chucknorris.io/jokes/foo",
];

/* remember this pattern ???

axios.get(URL)
.then()
.catch()

we can call then() + catch() on axios calls because they ALWAYS return a promise

*/

function fetchJokes() {
  Promise.all([ // promise.all expects an array of promises ...
    axios.get(urls[0]), 
    axios.get(urls[1]), 
    axios.get(urls[2]),
    axios.get(urls[3])
  ])
    .then((result) => {
      console.log("yay ! success");
      console.log(result);
    })
    .catch((err) => {
      console.error("nay ! error");
      console.log(err);
    });
}

document.getElementById("btn-action-2").onclick = fetchJokes;
