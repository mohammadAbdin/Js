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

async function getImage(imgPath) {
  imgPath = `https://image.tmdb.org/t/p/original/${imgPath}`;
  return await fetch(imgPath)
    .then((response) => {
      return response.json();
    })
    .then((img) => {
      return img;
    });
}

async function fetchMovies() {
  const response = await fetch(
    `${API_BASE_URL}?api_key=${apiKey}`,
    getHttpOptions()
  );
  if (!response.ok) {
  }
  const result = await response.json();
  await result.results.map((element) => {
    async function fetchImage(path) {
      await getImage(path);
    }
    element.picture = fetchImage(element.poster_path);
    console.log(element.picture);
    const movie1 = new Movie(
      element.title,
      element.release_date,
      element.picture,
      element.vote_average
    );
    // console.log(movie1.picture);

    createMovieCard(movie1);
  });
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
  <img class="poster" src="picture">////-----------
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
