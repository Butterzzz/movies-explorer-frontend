import React, { useState, useEffect } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css'
import { NOT_FOUND_ERR_TEXT, REQUEST_ERR_TEXT } from '../../utils/constants'

const MoviesCardList = ({ isLoading, ...props }) => {

  const [initialCardsAmount, setInitialCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < 720) {
      return 5;
    } else if (size < 920) {
      return 8;
    } else if (size < 1279) {
      return 12;
    } else if (size > 1279) {
      return 12;
    }
  })

  const [addCardsAmount, setAddMoreCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < 720) {
      return 2;
    } else if (size < 920) {
      return 2;
    } else if (size < 1279) {
      return 3;
    } else if (size > 1279) {
      return 4;
    }
  })

  function handleResize() {
    const size = window.innerWidth;
    if (size < 720) {
      setInitialCardsAmount(5);
      setAddMoreCardsAmount(2);
    } else if (size < 920) {
      setInitialCardsAmount(8);
      setAddMoreCardsAmount(2);
    } else if (size < 1279) {
      setInitialCardsAmount(12);
      setAddMoreCardsAmount(3);
    } else if (size > 1279) {
      setInitialCardsAmount(12);
      setAddMoreCardsAmount(4);
    }
  }

  function handleAddMovies() {
    setInitialCardsAmount(prev => prev + addCardsAmount);
  }

  const renderedMovies = props.movies.slice(0, initialCardsAmount);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <section className="movies" aria-label="Карточки фильмов">
      {isLoading && <Preloader />}
      <p className={`movies__errors ${!props.moviesError && 'movies__errors_type_hidden'}`}>
        {REQUEST_ERR_TEXT}
      </p>

      <p className={`movies__errors ${!props.notFound && 'movies__errors_type_hidden'}`}>
        {NOT_FOUND_ERR_TEXT}
      </p>

      <p className={`movies__errors ${(props.isSavedMovies && props.movies.length === 0) ? '' : 'movies__errors_type_hidden'}`}>
        {NOT_FOUND_ERR_TEXT}
      </p>

      <ul className="movies__list">
        {renderedMovies.map((movie) => (
          <MoviesCard
            key={props.isSavedMovies ? movie.movieId : movie.id}
            movie={movie}
            handleSaveMovie={props.handleSaveMovie}
            handleDeleteMovie={props.handleDeleteMovie}
            isSavedMovies={props.isSavedMovies}
          />
        ))}
      </ul>

      <button
        className={`movies__more-button button ${props.isSavedMovies ? 'movies__more-button_type_hidden'
          : `${props.movies.length === renderedMovies.length ? 'movies__more-button_type_hidden' : ''}`}`}
        onClick={handleAddMovies}
      >
        Ещё
      </button>

    </section>
  )
}

export default MoviesCardList