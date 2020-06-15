function handler(event) {
  // console.log(event); // robjet représentant l'évènement
  // console.log(event.target); // la source du click
  // console.log(event.foo); // undefined !!!
  // console.log(this === event.target); // true

  event.target.classList.toggle("is-moving");
  // event.target.classList.toggle("is-rotating");
}

// event-listener TJS ASSOCIE à une FUNCTION nommée le "event-handler" :)
document.querySelectorAll(".block").forEach(block => block.onclick = handler);
