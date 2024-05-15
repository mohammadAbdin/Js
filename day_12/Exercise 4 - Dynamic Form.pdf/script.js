function addField() {
  const input = document.createElement("input");
  input.type = "text";

  const form = document.getElementById("form");
  form.appendChild(input);
}

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;
  let message = "";
  inputs.forEach((input) => {
    if (!input.value) {
      allFilled = false;
    }
    message += `${input.value}\n`;
  });

  if (!allFilled) {
    alert("Please fill all fields.");
  } else {
    alert(`Gathered values:\n${message}`);
  }
}
