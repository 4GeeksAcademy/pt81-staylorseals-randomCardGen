import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card"); 
  let cardNumber = document.querySelector(".card-number");
  let suit = ["heart", "spade", "diamond", "club"];
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generateCard() {
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    let randomValue = value[Math.floor(Math.random() * value.length)];

    card.classList.add(randomSuit);
    cardNumber.textContent = randomValue;

    if (randomSuit === "♥" || randomSuit === "♦") {
      card.querySelector(".suit.top").style.color = "red";
      card.querySelector(".suit.bottom").style.color = "red";
    } else {
      card.querySelector(".suit.top").style.color = "black";
      card.querySelector(".suit.bottom").style.color = "black";
    }
  }

  generateCard();
  
}
