const toggleButton = document.getElementById("toggleButton");
const body = document.querySelector("body");

toggleButton.addEventListener("click", function () {
  if (body.classList.contains("dark")) body.classList.remove("dark");
  else body.classList.add("dark");
});
