class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {}
  getReleaseDate() {}
  getPicture() {}
  getRating() {}
}
const apiKey = "c4667e48cb722c523eb50bba3d76c592";

const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
  },
});
const API_BASE_URL = "https://api.themoviedb.org/3/movie/popular";

// async function getImage(imgPath) {
//   imgPath = `https://image.tmdb.org/t/p/original/${imgPath}?api_key=${apiKey}`;
//   return await fetch(imgPath, getHttpOptions())
//     .then((response) => {
//       console.log(response.url);
//       return response.json();
//     })
//     .then((img) => {
//       return img;
//     });
// }
const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`;

async function fetchMovies() {
  const response = await fetch(
    `${API_BASE_URL}?api_key=${apiKey}`,
    getHttpOptions()
  );
  if (!response.ok) {
    throw new Error("failed");
  }
  const result = await response.json();
  let element = result.results;
  console.log(element.length);
  for (let i = 0; i < element.length; i++) {
    console.log(i);

    element[i].picture = getImage(element[i].backdrop_path);
    element[i].picture = await fetch(element[i].picture, getHttpOptions());
    element[i].picture = element[i].picture.url;
    console.log(element[i].picture);
    const movie1 = new Movie(
      element[i].title,
      element[i].release_date,
      element[i].picture,
      element[i].vote_average
    );

    createMovieCard(movie1);
  }
  updateItemCount();
  return result;
}

fetchMovies();

function updateItemCount() {
  const displayedP = document.querySelector(".sort-bar p");
  const moviesnumberDiv = document.querySelectorAll(".movie");
  displayedP.textContent = moviesnumberDiv.length;
}

function createMovieCard(movie) {
  let target = document.querySelector(".movies-list");
  target.innerHTML += `
  <div class="movie">
  <img class="vector-img" src="./images/Vector.svg">
  <a href="#">
  <img class="poster-img" src="./images/tabler-icon-plus.svg">
  </a>
  <img class="poster" src="${movie.picture}">
  <div class="flex-container movie-info">
    <a href="#" class="title normal-link">${movie.title}</a>
    <p class="release-date"><strong>Release Date:</strong> ${movie.releaseDate}</p>
    <div class="flex-container rate-trailer">
      <div class="flex-container trailer">
        <img src="./images/play.svg">
        <a href="#">Trailer</a>
      </div>
      <div class="flex-container rating">
        <img src="./images/star.svg">
        <p>${movie.rating}</p>
      </div>
    </div>
  </div>
</div>
    `;
}
