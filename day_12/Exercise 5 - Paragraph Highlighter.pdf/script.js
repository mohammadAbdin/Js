const body = document.querySelector("body");

const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("change", function () {
  console.log("Selected color:", this.value);
});

const highlight = (element) => {
  const color = colorPicker.value;
  element.style.backgroundColor = color;
};

document.querySelectorAll("p").forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    highlight(this);
  });
});
