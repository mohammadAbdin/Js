const error = document.getElementById("error");
const users = document.getElementById("users");
const URL = "https://jsonplaceholder.typicoe.com/";

async function fetchUsers(endpoint) {
  try {
    const response = await fetch(`${URL}${endpoint}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
    return response;
  } catch (error) {
    error.textContent = `An error occurred: ${error.message}. Please try again later. `;
  }
}
async function fetchAndDisplayUsers() {
  const usersData = await fetchUsers("users/");
  console.log(usersData);
  usersData.map((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:
</strong>${user.email}</p>`;

    userDiv.classList.add("user");
    users.appendChild(userDiv);
  });
}

fetchAndDisplayUsers();
