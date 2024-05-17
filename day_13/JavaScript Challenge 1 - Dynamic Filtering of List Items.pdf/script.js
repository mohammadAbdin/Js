const items = document.getElementById("items");
const categories = document.querySelectorAll(".category");
const fruits = ["Apple", "Banana", "Cherry"];
const vegetables = ["Carrot", "Broccoe", "Lutce"];
const dairy = ["Milk", "Chese", "Yogurt"];
categories.forEach((category) => {
  category.addEventListener("click", function () {
    items.innerHTML = "";
    const type = category.getAttribute("data-category");
    console.log(type);
    let arr = [];
    switch (type) {
      case "fruits":
        arr = fruits;
        break;
      case "vegetables":
        arr = vegetables;
        break;
      case "dairy":
        arr = dairy;
        break;
    }
    for (let i = 0; i < arr.length; i++) {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.textContent = arr[i];
      items.appendChild(itemDiv);
    }
  });
});
