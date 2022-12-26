// Преобразование изображений
export function convertMovies(movies) {
  movies.forEach((movie) => {
    movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    movie.image = `https://api.nomoreparties.co${movie.image.url}`;
  });
  return movies;
}