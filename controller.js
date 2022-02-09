const invaders = document.querySelector(".invaders");
invaders.style.top = 0;
invaders.style.left = 0;

console.log(window.innerWidth);
console.log(document.documentElement.clientWidth);
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

let invadersPosition = 0;
let invadersDirection = "right";

const shiftInvaders = () => {
  if (invadersDirection === "right") {
    invaders.style.left = `${parseInt(invaders.style.top) + 10}px`;
  }
  invadersPosition += 10;
  // else if (invadersDirection === "left") invadersPosition -= 10;

  // if (invadersPosition > vw - 960) {
  //   invadersDirection = "left";
  //   invaders.style.top = `${parseInt(invaders.style.top) + 40}px`;
  // }
  // if (invadersPosition < 0) {
  //   invadersDirection = "right";
  //   invaders.style.top = `${parseInt(invaders.style.top) + 40}px`;
  // }
};

// const shiftInvaders = () => {
//   setInterval(
//     () => (invaders.style.left = `${parseInt(invaders.style.left) + 10}px`),
//     120
//   );
// };

// const shiftLeft = setInterval(function () {
//   invaders.style.left = `${parseInt(invaders.style.left) + 10}px`;
// }, 400);

document.addEventListener(
  "click",
  () =>
    setInterval(function () {
      console.log(invaders.style.left);
      invaders.style.left = `${parseInt(invaders.style.left) + 1}px`;
    }),
  500
);
console.log();
