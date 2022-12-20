import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

const MoviesCardList = ({ movies }) => {
  return (
    <section className="movies" aria-label="Карточки фильмов">
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>

      <button className="movies__more-button button" type="button" aria-label='Загрузить ещё'>Ещё</button>

    </section>
  )
}

export default MoviesCardList