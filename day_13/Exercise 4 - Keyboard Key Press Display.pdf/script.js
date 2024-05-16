const keyDisplay = document.getElementById("keyDisplay");
document.addEventListener("keydown", function (event) {
  keyDisplay.innerHTML = "";
  keyDisplay.innerHTML = event.key;
});
