const showModalBtn = document.getElementById("showModalBtn");
const modal = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

showModalBtn.addEventListener("click", function () {
  //   modal.classList.remove("overlay");
  modal.style.display = "block";
  console.log("hi");
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  console.log("hi");
});
