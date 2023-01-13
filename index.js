let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let sum = firstCard + secondCard;
let winner = false;
let inPlay = false;
let message = "";
const extraCards = [firstCard, firstCard, firstCard, firstCard, firstCard, firstCard, firstCard];
let cards = [firstCard, secondCard];
let count = 0;
let displayArray = [];
// get the element and store in a variable
let messageElement = document.getElementById("message-element");
let cardsElement = document.getElementById("cards-element");
let sumElement = document.getElementById("sum-element");

function checkButton() {
  if (inPlay) {
    // if inplay is true hide start button
    document.getElementById("btn-start").style.display = "none";
    document.getElementById("btn-quit").style.display = "inline-block";
    document.getElementById("btn-new-card").style.display = "inline-block";
  }

  if (!inPlay) {
    //if inplay is false hide the quit button
    document.getElementById("btn-quit").style.display = "none";
    document.getElementById("btn-new-card").style.display = "none";
    document.getElementById("btn-start").style.display = "inline-block";
  }
}
checkButton();

function startGame() {
  inPlay = true;
  checkButton();

  if (sum < 21) {
    message = "Do you want to try another card?";
  } else if (sum === 21) {
    message = "Blackjack!!";
    winner = true;
  } else {
    message = "You are bust!!";
    inPlay = false;
  }
  //change the text of the elements
  messageElement.textContent = message;
  cardsElement.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumElement.textContent = `Sum: ${sum}`;
  document.getElementById("btn-start").disabled = true;
}

function quitGame() {
  message = "Goodbye";
  //change the text of the elements
  messageElement.textContent = message;
  location.reload();
}

function checkScore() {
  if (sum < 21) {
    message = "Do you want to try another card?";
  } else if (sum === 21) {
    message = "Blackjack!!";
    winner = true;
  } else {
    message = "You are bust!!";
    inPlay = false;
  }
  messageElement.textContent = message;
}

function newCard() {
  if (inPlay && winner === false && sum < 21) {
    if (count <= 7) {
      cards.push(extraCards[count]);
      sum += extraCards[count];
      displayArray = cards.toString().replaceAll(',', ' ');
      cardsElement.textContent = `Cards: ${displayArray}`;
      sumElement.textContent = `Sum: ${sum}`;
      count++;
      checkScore();
    }
  }
  
}
