// Преобразование длительности фильма
export function calcMovieDuration(duration) {
  if (duration > 59) {
    const hours = (duration - duration % 60) / 60;
    const minutes = duration % 60;
    return `${hours}ч ${minutes > 0 ? minutes + 'м' : ''}`
  }
  return `${duration}м`;
}

// Поиск по запросу пользователя
export function searchMoviesByKeyword(movies, keyword, isShortMovies) {
  let foundMovies = [];
  movies.forEach((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = keyword.toLowerCase().trim();
    if (movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1) {
      if (isShortMovies) {
        movie.duration <= 40 && foundMovies.push(movie);
      } else {
        foundMovies.push(movie);
      }
    }
  });
  return foundMovies;
}