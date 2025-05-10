const movies = [];
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const duration = document.getElementById("duration");
const rating = document.getElementById("rating");
const addMovieButton = document.getElementById("add-movie");
const movieList = document.getElementById("movie-list");

const reset = () => {
  title.value = "";
  genre.value = "";
  duration.value = "";
  rating.value = "";
};

const addMovie = (event) => {
  event.preventDefault();

  const titleValue = title.value;
  const genreValue = genre.value;
  const durationValue = duration.value;
  const ratingValue = rating.value;
  const parts = durationValue.split(":").map(Number);

  let hours = 0,
    minutes = 0,
    seconds = 0;
  if (parts.length === 3) {
    [hours, minutes, seconds] = parts;
  } else if (parts.length === 2) {
    [minutes, seconds] = parts;
  } else if (parts.length === 1) {
    seconds = parts[0];
  }
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (!titleValue || !genreValue || !durationValue || !ratingValue) {
    alert("Please fill in all fields");
    return;
  }

  const movie = {
    title: titleValue,
    genre: genreValue,
    duration: durationValue,
    rating: ratingValue,
    seconds: totalSeconds,
  };
  movies.push(movie);

  reset();
  displayMovies();
};

const displayMovies = () => {
  movieList.innerHTML = movies
    .map((movie) => {
      return `
    <tr>
    <td>${movie.title}</td>
    <td>${movie.genre}</td>
    <td>${movie.rating}</td>
    <td>${movie.duration}</td>
    <td><button class='delete-button'>❌</button></td>
    </tr>
    `;
    })
    .join("");
  getTotalDuration();
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      movies.splice(index, 1);

      displayMovies();
    });
  });
};

const getTotalDuration = () => {
  const totalSeconds = movies.reduce((sum, movie) => sum + movie.seconds, 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const padded = [hours, minutes, seconds].map((unit) =>
    String(unit).padStart(2, "0")
  );

  document.getElementById("totalDuration").textContent = padded.join(":");
};

addMovieButton.addEventListener("click", addMovie);
