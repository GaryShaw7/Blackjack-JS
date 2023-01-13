let random1 = Math.floor(Math.random() * 10) + 2;
let random2 = Math.floor(Math.random() * 10) + 2;
let sum = random1 + random2;
let cards = [random1, random2];
let winner = false;
let inPlay = false;
let message = "";
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
  cardsElement.textContent = `Cards: ${random1} ${random2}`;
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
    let randomNumber = Math.floor(Math.random() * 10) + 2;
  if (inPlay && winner === false && sum < 21) {
    if (count <= 7) {
      cards.push(randomNumber);
      sum += randomNumber;
      displayArray = cards.toString().replaceAll(',', ' ');
      cardsElement.textContent = `Cards: ${displayArray}`;
      sumElement.textContent = `Sum: ${sum}`;
      count++;
      checkScore();
    }
  }

}
