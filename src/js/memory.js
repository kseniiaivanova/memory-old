document.addEventListener("DOMContentLoaded", () => {
  //creating objects inside the array
  const bildArray = [
    {
      imageName: "arsenal",
      imagePath: "arsenal.png",
    },

    {
      imageName: "dog",
      imagePath: "dog.png",
    },

    {
      imageName: "kill",
      imagePath: "kill.png",
    },

    {
      imageName: "low",
      imagePath: "low.png",
    },

    {
      imageName: "malajasted",
      imagePath: "malajasted.png",
    },

    {
      imageName: "peace",
      imagePath: "peace.png",
    },

    {
      imageName: "quarry",
      imagePath: "quarry.png",
    },

    {
      imageName: "refusal",
      imagePath: "refusal.png",
    },

    {
      imageName: "ringleader",
      imagePath: "ringleader.png",
    },

    {
      imageName: "son",
      imagePath: "son.png",
    },

    {
      imageName: "southpaw",
      imagePath: "southpaw.png",
    },

    {
      imageName: "viva",
      imagePath: "viva.png",
    },

    {
      imageName: "arsenal",
      imagePath: "arsenal.png",
    },

    {
      imageName: "dog",
      imagePath: "dog.png",
    },

    {
      imageName: "kill",
      imagePath: "kill.png",
    },

    {
      imageName: "low",
      imagePath: "low.png",
    },

    {
      imageName: "malajasted",
      imagePath: "malajasted.png",
    },

    {
      imageName: "peace",
      imagePath: "peace.png",
    },

    {
      imageName: "quarry",
      imagePath: "quarry.png",
    },

    {
      imageName: "refusal",
      imagePath: "refusal.png",
    },

    {
      imageName: "ringleader",
      imagePath: "ringleader.png",
    },

    {
      imageName: "son",
      imagePath: "son.png",
    },

    {
      imageName: "southpaw",
      imagePath: "southpaw.png",
    },

    {
      imageName: "viva",
      imagePath: "viva.png",
    },
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
    for (let i = 0; i < bildArray.length; i++) {
      const bild = document.createElement("img");
      bild.setAttribute("src", "bild_unclicked.png");
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
      cards[id1].setAttribute("src", "blank.png");
      cards[id2].setAttribute("src", "blank.png");
      cards[id1].removeEventListener("click", flipCard);
      cards[id2].removeEventListener("click", flipCard);
      numOpened.push(bildClicked);
      message.innerHTML = "Match found!";
    } else {
      cards[id1].setAttribute("src", "bild_unclicked.png");
      cards[id2].setAttribute("src", "bild_unclicked.png");
      message.innerHTML = "Sorry, try again!";
    }

    bildClicked = [];
    bildClickedId = [];

    if (numOpened.length === bildArray.length / 2) {
      message.innerHTML = "Congrats! You rock!";
      let prize = document.createElement("img");
      prize.setAttribute("src", "prize.png");
      cardArea.innerHTML = "";
      cardArea.insertAdjacentElement("afterbegin", prize);

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
