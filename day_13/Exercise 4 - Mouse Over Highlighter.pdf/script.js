const highlightable = document.querySelectorAll(".highlightable");
console.log(highlightable);
highlightable.forEach((p) => {
  p.addEventListener("mouseover", function () {
    console.log("hi");
    p.classList.add("highlighted");
    this.style.backgroundColor = "lightblue";
  });
  p.addEventListener("mouseout", function () {
    p.classList.remove("highlighted");
  });
});
