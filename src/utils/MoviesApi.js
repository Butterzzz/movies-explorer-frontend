// Получаем все фильмы с BeatfilmMoviesApi
export const getAllMovies = () => {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}