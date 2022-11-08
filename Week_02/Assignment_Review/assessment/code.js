// Your Code Here!

console.log("Movies:", movies);
console.log("MovieDetails:", movieDetails);



// Step 1: Combine the data
const combinedMovies = movies
  .filter(movie => movieDetails.some(movieDetail => movieDetail.title === movie.title))
  .map(movie => ({ ...movie, ...movieDetails.find(movieDetail => movieDetail.title === movie.title) }))


function movieCard(movie) {
  const movieCard = document.createElement("div")
  movieCard.classList.add("movie-card")

  const title = document.createElement("h3")
  title.innerText = movie.title

  const poster = document.createElement("img")
  poster.src = movie.imageUrl

  const castList = document.createElement("p")
  castList.innerText = movie.cast.join(", ")

  const releaseYear = document.createElement("p")
  releaseYear.innerText = movie.year

  movieCard.append(title)
  movieCard.append(poster)
  movieCard.append(castList)
  movieCard.append(releaseYear)

  return movieCard
}

function renderMovies(movies) {
  const main = document.getElementById("container")
  main.innerHTML = ""

  movies.forEach(movie => main.append(movieCard(movie)))
}

function filterMovies(movies, titleSearch, castSearch) {
  return movies
    .filter((movie) => (
      movie.title.toLowerCase().includes(titleSearch.toLowerCase())
      &&
      movie.cast.some(castMember => castMember.toLowerCase().includes(castSearch.toLowerCase()))
    ))
}

function searchForMovies(movies) {
  const title = document.getElementById("title").value
  const cast = document.getElementById("cast").value

  const moviesMatchingSearchTerms = filterMovies(movies, title, cast)

  renderMovies(moviesMatchingSearchTerms)
}

renderMovies(combinedMovies)

const form = document.getElementById("searchForm")
form.addEventListener('submit', (e) => {
  e.preventDefault()
  searchForMovies(combinedMovies)
})
