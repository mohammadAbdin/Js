const input = document.getElementById("temperature");
const celsius = document.getElementById("toCelsius");
const fahrenheit = document.getElementById("toFahrenheit");
const output = document.getElementById("output");

celsius.addEventListener("click", function () {
  output.textContent = `${(((input.value - 32) * 5) / 9).toFixed(
    2
  )}°F is equal to ${input.value}°C`;
  console.log(output.value);
});

fahrenheit.addEventListener("click", function () {
  output.textContent = `${input.value}°C is equal to ${
    (input.value * 9) / 5 + 32
  }°F`;
});
