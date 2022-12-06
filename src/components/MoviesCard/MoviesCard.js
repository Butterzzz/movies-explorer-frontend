import React from 'react'
import './MoviesCard.css'

const MoviesCard = ({ movie }) => {
  return (
    <li className="movies__list-item">
      <article className="card">
        <img className="card__image" src={movie.image} alt={movie.nameRU} />
        <div className="card__description">
          <div className="card__wrapper">
            <h2 className="card__title">{movie.nameRU}</h2>
            <button className="card__button button" type="button" aria-label="Cохранить в коллекцию" />
          </div>
          <p className="card__duration">{movie.duration}</p>
        </div>
      </article>
    </li>
  )
}

export default MoviesCard