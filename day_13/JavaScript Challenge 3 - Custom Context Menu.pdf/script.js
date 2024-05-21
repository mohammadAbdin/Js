document.querySelector("h1").addEventListener("contextmenu", (e) => {
  e.preventDefault();
  contextMenu.style.display = "block";
});
const contextMenu = document.getElementById("contextMenu");
[...contextMenu.children].forEach((element) => {
  element.addEventListener("click", function () {
    alert(element.innerHTML + " is clicked!");
    contextMenu.style.display = "none";
  });
});
