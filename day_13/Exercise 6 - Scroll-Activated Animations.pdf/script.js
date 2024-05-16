const textElements = document.querySelectorAll(".text");

window.addEventListener("scroll", function () {
  textElements.forEach((textElement) => {
    const elementPosition = textElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight / 1.5;

    if (elementPosition < viewportHeight) {
      textElement.classList.add("active");
    } else {
      textElement.classList.remove("active");
    }
  });
});
