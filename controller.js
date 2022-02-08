let gameOn = false;
const invaders = document.querySelector(".invaders");

let invadersPosition = 0;
let invadersDirection = "right";
let rowDown = 0;
const shiftInvaders = () => {
  if (invadersDirection === "right") invadersPosition += 10;
  else if (invadersDirection === "left") invadersPosition -= 10;
  invaders.style.left = `${invadersPosition}px`;
  if (invadersPosition > 400) {
    invadersDirection = "left";
    rowDown += 1;
    invaders.style.top = `${rowDown * 20}px`;
  }
  if (invadersPosition < 0) {
    invadersDirection = "right";
    rowDown += 1;
    invaders.style.top = `${rowDown * 40}px`;
  }
};

// const startGame = () => {};
// If screen clicked, start game

const startGame = setInterval(shiftInvaders, 60);

document.addEventListener("click", startGame);

// On click, start game
// Start game => space invaders move side to side and down
// Use setInterval to track this
