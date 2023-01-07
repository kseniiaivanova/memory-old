import blank from "../assets/blank.png";
import final from "../assets/prize.png";
import unclicked from "../assets/bild_unclicked.png";
/* import ars from "../assets/arsenal.png";
import dog from "../assets/dog.png";
import kill from "../assets/kill.png";
import low from "../assets/low.png";
import malajasted from "../assets/malajasted.png";
import peace from "../assets/peace.png";
import quarry from "../assets/quarry.png";
import refusal from "../assets/refusal.png";
import ringleader from "../assets/ringleader.png";
import son from "../assets/son.png";
import southpaw from "../assets/southpaw.png";
import viva from "../assets/viva.png"; */

document.addEventListener("DOMContentLoaded", () => {
  //creating objects inside the array
  const bildArray = [
    { imageName: "arsenal", imagePath: "arsenal" },

    { imageName: "dog", imagePath: "../assets/dog.png" },

    { imageName: "kill", imagePath: "../assets/kill.png" },

    { imageName: "low", imagePath: "../assets/low.png" },

    { imageName: "malajasted", imagePath: "../assets/malajasted.png" },

    { imageName: "peace", imagePath: "../assets/peace.png" },

    { imageName: "quarry", imagePath: "../assets/quarry.png" },

    { imageName: "refusal", imagePath: "../assets/refusal.png" },

    { imageName: "ringleader", imagePath: "../assets/ringleader.png" },

    { imageName: "son", imagePath: "../assets/son.png" },

    { imageName: "southpaw", imagePath: "../assets/southpaw.png" },

    { imageName: "viva", imagePath: "../assets/viva.png" },

    { imageName: "arsenal", imagePath: "../assets/arsenal.png" },

    { imageName: "dog", imagePath: "../assets/dog.png" },

    { imageName: "kill", imagePath: "../assets/kill.png" },

    { imageName: "low", imagePath: "../assets/low.png" },

    { imageName: "malajasted", imagePath: "../assets/malajasted.png" },

    { imageName: "peace", imagePath: "../assets/peace.png" },

    { imageName: "quarry", imagePath: "../assets/quarry.png" },

    { imageName: "refusal", imagePath: "../assets/refusal.png" },

    { imageName: "ringleader", imagePath: "../assets/ringleader.png" },

    { imageName: "son", imagePath: "../assets/son.png" },

    { imageName: "southpaw", imagePath: "../assets/southpaw.png" },

    { imageName: "viva", imagePath: "../assets/viva.png" },
  ];

  //sorting the images in random order
  bildArray.sort(function () {
    return 0.5 - Math.random();
  });

  //creating arrays for storing clicked images, their id and opened images

  let bildClicked = [];
  let bildClickedId = [];
  let numOpened = [];

  //selecting divs for board, message and button

  let cardArea = document.querySelector(".cardsArea");
  let message = document.querySelector(".result");
  let buttArea = document.querySelector(".btn");

  //creating the board

  function makeBoard() {
    for (i = 0; i < bildArray.length; i++) {
      const bild = document.createElement("img");
      bild.setAttribute("src", unclicked);
      bild.setAttribute("id", i);
      bild.addEventListener("click", flipCard);
      cardArea.appendChild(bild);
    }
  }

  //checking the matches
  function checkChosen() {
    const cards = document.querySelectorAll("img");
    const id1 = bildClickedId[0];
    const id2 = bildClickedId[1];
    if (bildClicked[0] === bildClicked[1] && id2 !== id1) {
      cards[id1].setAttribute("src", blank);
      cards[id2].setAttribute("src", blank);
      cards[id1].removeEventListener("click", flipCard);
      cards[id2].removeEventListener("click", flipCard);
      numOpened.push(bildClicked);
      message.innerHTML = "Match found!";
    } else {
      cards[id1].setAttribute("src", unclicked);
      cards[id2].setAttribute("src", unclicked);
      message.innerHTML = "Sorry, try again!";
    }

    bildClicked = [];
    bildClickedId = [];

    if (numOpened.length === bildArray.length / 2) {
      message.innerHTML = "Congrats! You rock!";
      let prize = document.createElement("img");
      prize.setAttribute("src", final);
      cardArea.innerHTML = "";
      cardArea.insertAdjacentElement("afterbegin", final);

      let reButt = document.createElement("button");
      reButt.innerText = "Play again";
      reButt.addEventListener("click", reLoad);
      buttArea.appendChild(reButt);
    }
  }
  function reLoad() {
    return location.reload();
  }

  //flipping the card

  function flipCard() {
    let bildId = this.getAttribute("id");
    bildClicked.push(bildArray[bildId].imageName);
    bildClickedId.push(bildId);
    this.setAttribute("src", bildArray[bildId].imagePath);

    // calling the check function

    if (bildClicked.length === 2) {
      setTimeout(checkChosen, 500);
    }
  }

  makeBoard();
});
