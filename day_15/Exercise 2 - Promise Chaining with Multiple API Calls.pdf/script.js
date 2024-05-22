const URL = "https://jsonplaceholder.typicode.com/";
const usersDiv = document.getElementById("users");
async function fetchUsers(endpoint) {
  try {
    const response = await fetch(`${URL}${endpoint}`)
      .then((response) => {
        console.log("k");
        if (!response.ok) {
          console.log("lo");
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
    return response;
  } catch (error) {
    console.log("hi");
    error.textContent = `An error occurred: ${error.message}. Please try again later. `;
  }
}
const displayUsers = (users) => {
  console.log(users.length);
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
 <h2>${user.name}</h2>
 <p><strong>Email:</strong> ${user.email}</p>
 <div class="posts"></div>
`;
    getUserPosts(user, userDiv);

    usersDiv.appendChild(userDiv);
  });
};

async function getUserPosts(user, userDiv) {
  const posts = await fetchUsers(`posts?userId=${user.id}`);
  const postsDiv = document.querySelector(".posts");
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<strong>${post.title}</strong>
        <br>${post.body}`;
    postDiv.classList.add("post");
    postsDiv.appendChild(postDiv);
  });
}

async function fetchAndDisplayUsers() {
  const users = await fetchUsers("users/");
  if (users) {
    displayUsers(users);
  }
}

fetchAndDisplayUsers();
