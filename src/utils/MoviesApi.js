import { MOVIES_URL } from './constants';

// Получаем все фильмы с BeatfilmMoviesApi
export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {
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