const virtual = document.getElementById("virtual");
let result = document.getElementById("result");
const gamer = document.getElementById("gamer");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const virtualOptions = ["rock", "paper", "scissors"];
const gamerImage = document.getElementById("image-gamer");
let virtualImage = document.getElementById("image-virtual");

console.log(virtualImage);

rock.addEventListener("click", () => {
  let gamerChoice = "rock";
  let i = Math.floor(Math.random() * 3);
  let virtualChoice = virtualOptions[i];
  virtual.innerHTML = virtualChoice;
  gamerImage.src = "./images/descarga (1).jfif";
  if (gamerChoice === "rock" && virtualChoice === "rock") {
    result.innerText = "IT'S A TIE";
    virtualImage.src = "./images/descarga (1).jfif";
  } else if (gamerChoice === "rock" && virtualChoice === "paper") {
    result.innerHTML = "I WON";
    virtualImage.src = "./images/descarga (2).jfif";
  } else if (gamerChoice === "rock" && virtualChoice === "scissors") {
    result.innerHTML = "YOU WIN";
    virtualImage.src = "./images/descarga.jfif";
  }
});

paper.addEventListener("click", () => {
  let gamerChoice = "paper";
  let i = Math.floor(Math.random() * 3);
  let virtualChoice = virtualOptions[i];
  virtual.innerHTML = virtualChoice;
  gamerImage.src = "./images/descarga (2).jfif";
  if (gamerChoice === "paper" && virtualChoice === "rock") {
    result.innerHTML = "YOU WIN";
    virtualImage.src = "./images/descarga (1).jfif";
  } else if (gamerChoice === "paper" && virtualChoice === "paper") {
    result.innerHTML = "IT'S A TIE";
    virtualImage.src = "./images/descarga (2).jfif";
  } else if (gamerChoice === "paper" && virtualChoice === "scissors") {
    result.innerHTML = "I WIN";
    virtualImage.src = "./images/descarga.jfif";
  }
});

scissors.addEventListener("click", () => {
  let gamerChoice = "scissors";
  let i = Math.floor(Math.random() * 3);
  let virtualChoice = virtualOptions[i];
  virtual.innerHTML = virtualChoice;
  gamerImage.src = "./images/descarga.jfif";
  if (gamerChoice === "scissors" && virtualChoice === "rock") {
    result.innerHTML = "I WIN";
    virtualImage.src = "./images/descarga (1).jfif";
  } else if (gamerChoice === "scissors" && virtualChoice === "paper") {
    result.innerHTML = "YOU WIN";
    virtualImage.src = "./images/descarga (2).jfif";
  } else if (gamerChoice === "scissors" && virtualChoice === "scissors") {
    result.innerHTML = "IT'S A TIE";
    virtualImage.src = "./images/descarga.jfif";
  }
});
