const usersURL = "https://jsonplaceholder.tyicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.getElementById("posts");
const usersContainer = document.getElementById("users");
const errorContainer = document.getElementById("error");

const usersPromise = fetch(usersURL).then((response) => response.json());
const postsPromise = fetch(postsURL).then((response) => response.json());
Promise.all([usersPromise, postsPromise])
  .then(([users, posts]) => {
    console.log(users);
    console.log(posts);
    users.map((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersContainer.appendChild(userDiv);
    });
    posts.map((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch((error) => {
    errorContainer.textContent = "One or more promises failed:" + error;
  });
