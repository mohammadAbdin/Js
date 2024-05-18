const start_menu = document.getElementById("start_menu");
const start_button = document.getElementById("START");
const control = document.getElementById("control");
const second_player_div = document.querySelectorAll("#second_player div");
const first_player_div = document.querySelectorAll("#first_player div");
const first_player = document.getElementById("first_player");
const second_player = document.getElementById("second_player");
const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const hold = document.getElementById("HOLD");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const rollDice = document.getElementById("ROLL DICE");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

let sum = 0;
let turn = 1;

const palying_screen = () => {
  target = parseInt(target.value);
  console.log(target);

  rollDice.addEventListener("click", function () {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute("src", `assets/images/dice-${dice1}.png`);
    img2.setAttribute("src", `assets/images/dice-${dice2}.png`);

    sum += dice1 + dice2;

    if (turn === 1) {
      current1.innerHTML = sum;
    } else {
      current2.innerHTML = sum;
    }
  });

  hold.addEventListener("click", function () {
    if (turn === 1) {
      let score = parseInt(score1.innerHTML) + sum;
      score1.innerHTML = score;
      current1.innerHTML = 0;
      sum = 0;

      if (score == target) {
        const firstElement = result1.firstElementChild;
        firstElement.style.display = "block";
        const secondElement = result2.children[1];
        secondElement.style.display = "block";
        second_player.classList.remove("second_player");
        second_player.classList.add("lose");
      } else if (score > target) {
        const firstElement = result2.firstElementChild;
        firstElement.style.display = "block";
        const secondElement = result1.children[1];
        secondElement.style.display = "block";
        first_player.classList.remove("first_player");
        first_player.classList.add("lose");
      } else turn = 2;
    } else {
      let score = parseInt(score2.innerHTML) + sum;
      score2.innerHTML = score;
      current2.innerHTML = 0;
      sum = 0;

      if (score == target) {
        const firstElement = result2.firstElementChild;
        firstElement.style.display = "block";
        const secondElement = result1.children[1];
        secondElement.style.display = "block";
        first_player.classList.remove("first_player");
        first_player.classList.add("lose");
      } else if (score > target) {
        const firstElement = result1.firstElementChild;
        firstElement.style.display = "block";
        const secondElement = result2.children[1];
        secondElement.style.display = "block";
        second_player.classList.remove("second_player");
        second_player.classList.add("lose");
      } else turn = 1;
    }
  });
};

const resetGame = () => {
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  current1.innerHTML = 0;
  current2.innerHTML = 0;
  sum = 0;
  turn = 1;
};

start_button.addEventListener("click", function () {
  const target = document.getElementById("target").value;
  start_menu.style.display = "none";
  control.style.display = "flex";
  second_player_div.forEach((div) => {
    div.style.display = "block";
  });
  first_player_div.forEach((div) => {
    div.style.display = "block";
  });
  palying_screen();
});
