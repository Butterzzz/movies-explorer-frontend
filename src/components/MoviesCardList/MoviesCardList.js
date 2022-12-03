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
    </section>
  )
}

export default MoviesCardList