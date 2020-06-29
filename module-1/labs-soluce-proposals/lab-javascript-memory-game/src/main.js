var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const game = new MemoryGame(cards);

game.shuffleCards();

document.addEventListener("DOMContentLoaded", function (event) {

  var html = '';
  var pairsClicked = document.getElementById("pairs_clicked");
  var pairsGuessed = document.getElementById("pairs_guessed");
  var card1 = null, card2 = null;

  game.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  function reset() {
    card1 = null;
    card2 = null;
    setCardStatus("unblocked");
  }
  
  function setCardStatus(mode) {
    document.querySelectorAll(".card").forEach(card => {
      if (mode === "blocked") card.classList.add("blocked");
      else card.classList.remove("blocked");
    })
  }

  function resetGame() {
    // reset actions ...
    memoryGame.shuffleCards();
    setCardStatus("unblocked"); // allow click event on card
    pairsGuessed.textContent = "0";
    pairsClicked.textContent = "0";
    // flip cards actions ...
    document.querySelectorAll(".card").forEach(card => {
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");
      front.classList.replace("front", "back");
      back.classList.replace("back", "front");
    })
  }

  function show(card) {
    card.classList.replace("back", "front");
    card.nextElementSibling.classList.replace("front", "back");
  }

  function hide() {
    card1.classList.replace("front", "back");
    card1.nextElementSibling.classList.replace("back", "front");
    card2.classList.replace("front", "back");
    card2.nextElementSibling.classList.replace("back", "front");
  }

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function (card) {

    card.onclick = function (evt) {

      // attention please => THE INSTRUCTIONS ORDER MATTERS

      show(card); // display currently clicked card

      if (!card1) card1 = card; // if thjere is no selected card, set cad1
      else card2 = card; // else, set card2 as well
    
      if (card1 && card2) { // if both card has been selected ...

        setCardStatus("blocked"); // avoid click event on card

        // check if it's a pair
        const foundPair = game.checkIfPair(card1.getAttribute("name"), card2.getAttribute("name"));
        // update the score display
        pairsGuessed.textContent = game.pairsGuessed; // guessed pairs count
        pairsClicked.textContent = game.pairsClicked; // clicked pairs count

        if (!foundPair) { // no match at all ...
          window.setTimeout(() => { // wait 1,5 second (async action) and then ...
            hide(); // hide the flipped cards
            reset(); // reset both cards so you have to pick 2 again
          }, 1500);
        }

        else reset(); // else, there are remaining pairs => reset both cards so you have to pick again

        if (memoryGame.isFinished()) { // if all pairs are found
          window.setTimeout(() => { // wait for 1,5 second
            resetGame(); // reset the board game
          }, 1500);
        }

      }
    }
  });
});


