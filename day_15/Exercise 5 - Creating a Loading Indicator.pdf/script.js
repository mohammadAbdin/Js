const usersURL = "https://jsonplaceholder.typicode.com/users";

const loading_indicator = document.getElementById("loading-indicator");

const usersDiv = document.getElementById("users");
loading_indicator.style.display = "block";
const usersPromise = fetch(usersURL)
  .then((response) => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then((users) => {
    loading_indicator.style.display = "";
    users.map((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersDiv.appendChild(userDiv);
    });
  });
