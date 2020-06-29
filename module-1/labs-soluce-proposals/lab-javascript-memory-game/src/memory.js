class MemoryGame {
  
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var m = this.cards.length, t, i;

    while (m) {

      i = Math.floor(Math.random() * m--);

      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++;

    const found = card1 === card2;

    if (found) this.pairsGuessed++;

    return found;
  }

  isFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) return true;
    if (!this.pairsGuessed || this.pairsGuessed < this.cards.length) return false;
  }
}