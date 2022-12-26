// Фильтр по длительности
export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < 40);
}