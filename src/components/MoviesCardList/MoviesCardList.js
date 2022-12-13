import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

const MoviesCardList = ({ moviesList }) => {
  return (
    <section className="movies" aria-label="Карточки фильмов">
      <ul className="movies__list">
        {moviesList.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </ul>

      <button className="movies__more-button button" type="button" aria-label='Загрузить ещё'>Ещё</button>

    </section>
  )
}

export default MoviesCardList