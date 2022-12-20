import React from 'react'
import './MoviesCard.css'
import { calcMovieDuration } from '../../utils/utils.js';

const MoviesCard = ({ movie, savedMovies, onClick }) => {

  return (
    <li className="movies__list-item">
      <article className="card">
        <a
          className="card__link"
          href={movie.trailerLink}
          target='_blank'
          rel="noreferrer"
          title="Посмотреть трейлер"
        >
          <img className="card__image" src={`${'https://api.nomoreparties.co'}${movie.image.url}`} alt={movie.nameRU} />
        </a>

        <div className="card__description">
          <div className="card__wrapper">
            <h2 className="card__title">{movie.nameRU}</h2>

            <button
              className="card__button button"
              type="button"
              aria-label="Cохранить в коллекцию"
              onClick={onClick}
            />

          </div>
          <p className="card__duration">{calcMovieDuration(movie.duration)}</p>
        </div>
      </article>
    </li>
  )
}

export default MoviesCard