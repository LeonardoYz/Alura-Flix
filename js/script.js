function addMovies() {
  const chosenMovie = document.getElementById('movies-input').value

  if (chosenMovie.endsWith('.jpg')) {
    putChosenMovieOnScreen(chosenMovie)
  } else {
    alert('Certifique-se de que a imagem inserida no campo tem o formato .jpg')
  }

  document.getElementById('movies-input').value = ''
}

function putChosenMovieOnScreen(movie) {
  const movies = document.getElementById('movies__wrapper')

  const movieBox = document.createElement('div')
  movieBox.className = 'movies__image--box slide-animation--right'

  const movieImageBox = document.createElement('div')
  movieImageBox.className = 'movies__image'

  let movieImage = document.createElement('img')
  movieImage.src = movie

  movies.append(movieBox)
  movieBox.append(movieImageBox)
  movieImageBox.append(movieImage)
}

document
  .getElementById('movies-input')
  .addEventListener('keyup', event => {
    event.preventDefault()
    if (event.keyCode === 13) {
      document.getElementById('button--add-movies').click()
    }
  })
