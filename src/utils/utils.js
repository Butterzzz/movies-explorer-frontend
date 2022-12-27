// Преобразование длительности фильма
export function calcMovieDuration(duration) {
  if (duration > 59) {
    const hours = (duration - duration % 60) / 60;
    const minutes = duration % 60;
    return `${hours}ч ${minutes > 0 ? minutes + 'м' : ''}`
  }
  return `${duration}м`;
}

// Фильтр по длительности
export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < 40);
}