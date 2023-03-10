let random1 = Math.floor(Math.random() * 10) + 2;
let random2 = Math.floor(Math.random() * 10) + 2;
let sum = random1 + random2;
let cards = [random1, random2];
let checkSuitsList = [random1, random2];
let winner = false;
let inPlay = false;
let message = "";
let count = 0;
let displayArray = [];

// Get the element and store it in a variable
let messageElement = document.getElementById("message-element");
let cardsElement = document.getElementById("cards-element");
let sumElement = document.getElementById("sum-element");
let modal = document.getElementById("myModal");
let btn = document.getElementById("rules-btn");
let span = document.getElementsByClassName("close")[0];
let startBtn = document.getElementById("btn-start");
let quitBtn = document.getElementById("btn-quit");
let newCardBtn = document.getElementById("btn-new-card");

function checkButton() {
  if (inPlay) {
    // If inplay is true hide start button
    document.getElementById("btn-start").style.display = "none";
    document.getElementById("btn-quit").style.display = "inline-block";
    document.getElementById("btn-new-card").style.display = "inline-block";
  }

  if (!inPlay) {
    // If inplay is false hide the quit button
    document.getElementById("btn-quit").style.display = "none";
    document.getElementById("btn-new-card").style.display = "none";
    document.getElementById("btn-start").style.display = "inline-block";
  }
}
checkButton();


startBtn.addEventListener("click", function(){
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
  // Change the text of the elements
  messageElement.textContent = message;
  cardsElement.textContent = `Cards: ${random1} ${random2}`;
  sumElement.textContent = `Sum: ${sum}`;
  document.getElementById("btn-start").disabled = true;
})

quitBtn.addEventListener("click", function(){
  message = "Goodbye";
  // Change the text of the elements
  messageElement.textContent = message;
  location.reload();
})

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

function CheckSuits(latestCard) {
  let countSuit = 0;

  // Check the list to see how many of this card we already have
  for (const element of checkSuitsList) {
    if (element === latestCard) {
      countSuit++;
    }
  }
  // Make sure there are not already 4 of the same number out
  if (countSuit < 4) {
    checkSuitsList.push(latestCard);
  } else {
    // If we already have 4 of the same number generate a new number
    let newRandomNumber = Math.floor(Math.random() * 10) + 2;
    // Check that the new number is not the same as the previous number
    while (newRandomNumber === latestCard) {
      newRandomNumber = Math.floor(Math.random() * 10) + 2;
    }
    checkSuitsList.push(newRandomNumber);
    latestCard = newRandomNumber;
  }
  return latestCard;
}

newCardBtn.addEventListener("click", function(){
  let randomNumber = Math.floor(Math.random() * 10) + 2;
  randomNumber = CheckSuits(randomNumber);

  if (inPlay && winner === false && sum < 21) {
    if (count <= 7) {
      cards.push(randomNumber);
      sum += randomNumber;
      displayArray = cards.toString().replaceAll(",", " ");
      cardsElement.textContent = `Cards: ${displayArray}`;
      sumElement.textContent = `Sum: ${sum}`;
      count++;
      checkScore();
    }
  }
})

// When the user clicks on the rules button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
