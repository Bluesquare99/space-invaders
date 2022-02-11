const invaders = document.querySelector(".invaders");
const ship = document.querySelector(".ship");
const modal = document.querySelector(".modal");

invaders.style.top = 0;
invaders.style.left = 0;
ship.style.left = 0;

const blinkModal = setInterval(() => modal.classList.toggle("hidden"), 700);

function hideModal() {
  modal.classList.add("hidden");
  clearInterval(blinkModal);
}

let num = 0;
invaders.addEventListener("click", () => {
  if (num % 2 === 0) {
    blinkModal();
    num++;
  } else {
    clearBlink();
    num++;
  }
});

// Defining move functions
const moveLeft = () =>
  (invaders.style.left = `${parseInt(invaders.style.left) - 1}px`);
const moveRight = () =>
  (invaders.style.left = `${parseInt(invaders.style.left) + 1}px`);
let direction = "left";
const moveDown = () =>
  (invaders.style.top = `${parseInt(invaders.style.top) + 40}px`);

const moveInvaders = () => {
  setInterval(function () {
    if (direction === "left") moveLeft();
    if (direction === "right") moveRight();

    // If invaders reach either side boundary, switch direction and shift down
    if (invaders.getBoundingClientRect()["left"] < 60) {
      direction = "right";
      moveDown();
    } else if (
      window.innerWidth - invaders.getBoundingClientRect()["right"] <
      60
    ) {
      direction = "left";
      moveDown();
    }
  });
};

document.addEventListener(
  "click",
  () => {
    hideModal();
    moveInvaders();
  },
  500
);

document.addEventListener("keyup", (e) => {
  if (e["key"] === "ArrowRight")
    ship.style.left = `${parseInt(ship.style.left) + 80}px`;
  else if (e["key"] === "ArrowLeft")
    ship.style.left = `${parseInt(ship.style.left) - 80}px`;
});
console.log(invaders.getBoundingClientRect());

console.log(ship.getBoundingClientRect());

/*
NEXT STEPS

1. Create a bullet and allow it to be fired every so often
2. The place it would be fired from needs to be positioned in the middle of the ship
3. LATER Limit the number of bullets that can be fired per interval
4. 
*/
