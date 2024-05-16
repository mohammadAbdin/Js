const clickButton = document.getElementById("clickButton");
const counter = document.getElementById("counter");
clickButton.addEventListener("click", function () {
  counter.innerText++;
  console.log();
});
