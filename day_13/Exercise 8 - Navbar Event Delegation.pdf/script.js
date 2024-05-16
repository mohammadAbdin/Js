// Step 2: Set Up Variables
const navList = document.getElementById("navList");
const message = document.getElementById("message");
const navListChildren = Array.from(navList.children);

navListChildren.forEach((child) => [
  child.addEventListener("click", function (event) {
    const dataLink = event.target.getAttribute("data-link");

    showMessage(dataLink);
  }),
]);

function showMessage(text) {
  message.textContent = `You clicked: ${text}`;
  message.style.display = "block";

  setTimeout(function () {
    message.style.display = "none";
  }, 2000);
}
