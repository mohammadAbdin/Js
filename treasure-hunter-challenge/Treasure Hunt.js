// const down = document.getElementById("down");
// const up = document.getElementById("up");
// const right = document.getElementById("right");
const score = document.getElementById("score");
const moves = document.getElementById("moves");

const grid = document.getElementById("grid");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}
let playerPosition = 0;

const playerPlace = () => {
  const player = grid.children[playerPosition];
  player.classList.add("player");

  const event = window.getComputedStyle(player);
  const backgroundColor = event.backgroundColor;
  //   console.log(playerPosition);
  //   console.log(backgroundColor);
  switch (backgroundColor) {
    case "rgb(255, 215, 0)":
      found("treasure", playerPosition);
      break;
    case "rgb(255, 0, 0)":
      found("trap");
      break;
  }
};
playerPlace();

let trapsOrTresures = [];
const trapsAndTresures = [];
givingRandomNumber(3);
function givingRandomNumber(N) {
  let i = 0;
  while (i < N) {
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    if (!trapsAndTresures.includes(randomNumber)) {
      i++;
      trapsOrTresures.push(randomNumber);
      trapsAndTresures.push(randomNumber);
    }
  }
}

const setTraps = (N) => {
  const trap = grid.children[N];
  trap.classList.add("trap");
};

for (let j = 0; j < trapsOrTresures.length; j++) {
  setTraps(trapsOrTresures[j]);
}

trapsOrTresures = [];
givingRandomNumber(5);
const setTresures = (N) => {
  const tresure = grid.children[N];
  tresure.classList.add("treasure");
};

for (let j = 0; j < trapsOrTresures.length; j++) {
  setTresures(trapsOrTresures[j]);
}

const movePlayer = (direction) => {
  moves.innerHTML--;
  if (moves.innerHTML < 0) {
    alert("the game is over your score is : " + score.innerHTML);
    moves.innerHTML = 0;
  } else {
    switch (direction) {
      case "up":
        if (playerPosition - 10 < 0) {
          moves.innerHTML++;
        }
        if (playerPosition - 10 >= 0) playerPosition = playerPosition - 10;
        playerPlace();
        prevCell(playerPosition + 10);
        break;
      case "down":
        if (playerPosition + 10 >= 100) {
          moves.innerHTML++;
        }
        if (playerPosition + 10 < 100) playerPosition = playerPosition + 10;
        playerPlace();
        prevCell(playerPosition - 10);
        break;
      case "right":
        if (playerPosition % 10 == 9) {
          moves.innerHTML++;
        }
        if (playerPosition + 1 < 100)
          if (playerPosition % 10 != 9) playerPosition++;
        playerPlace();
        prevCell(playerPosition - 1);

        break;
      case "left":
        console.log(playerPosition);
        if (playerPosition - 1 >= 0)
          if (playerPosition % 10 != 0) {
            playerPosition--;
            console.log(playerPosition);
            prevCell(playerPosition + 1);
            playerPlace();
          }
        if (playerPosition % 10 == 0) {
          moves.innerHTML++;
        }
        break;
    }
  }
};
const prevCell = (cell) => {
  const player = grid.children[cell];
  player.classList.remove("player");
  console.log(cell);
};

const found = (whatFound, player) => {
  switch (whatFound) {
    case "trap":
      alert("you lose");
      moves.innerHTML = 0;
      break;
    case "treasure":
      const playerpos = grid.children[player];
      playerpos.classList.remove("treasure");
      alert("you got a trasure");
      score.innerHTML++;
      break;
  }
};
