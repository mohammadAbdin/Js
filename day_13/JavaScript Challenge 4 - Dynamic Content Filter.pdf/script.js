const filterInput = document.getElementById("filterInput");
const itemList = document.getElementById("itemList").getElementsByTagName("li");

filterInput.addEventListener("input", function () {
  const filterValue = filterInput.value.toLowerCase();

  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(filterValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
});
