const tools = document.querySelectorAll(".tool");
const drawingArea = document.getElementById("drawingArea");

tools.forEach((tool) => {
  tool.addEventListener("click", function () {
    const toolType = tool.getAttribute("data-tool");
    const element = document.createElement("div");

    element.classList.add(toolType);

    drawingArea.appendChild(element);
    console.log(drawingArea.children);
  });
});
