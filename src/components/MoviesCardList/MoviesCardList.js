import React, { useState, useEffect } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css'
// Константы
import {
  NOT_FOUND_ERR_TEXT,
  NOT_FOUND_SAVED_ERR_TEXT,
  REQUEST_ERR_TEXT,
  SCREEN_SIZE_S,
  SCREEN_SIZE_M ,
  SCREEN_SIZE_L,
  INITIAL_MOVIES_S,
  INITIAL_MOVIES_M,
  INITIAL_MOVIES_L,
  LOAD_MORE_S_M,
  LOAD_MORE_L,
  LOAD_MORE_XL
} from '../../utils/constants'

const MoviesCardList = ({ isLoading, ...props }) => {

  const [initialCardsAmount, setInitialCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < SCREEN_SIZE_S) {
      return INITIAL_MOVIES_S;
    } else if (size < SCREEN_SIZE_M) {
      return INITIAL_MOVIES_M;
    } else if (size < SCREEN_SIZE_L) {
      return INITIAL_MOVIES_L;
    } else if (size > SCREEN_SIZE_L) {
      return INITIAL_MOVIES_L;
    }
  })

  const [addCardsAmount, setAddMoreCardsAmount] = useState(() => {
    const size = window.innerWidth;
    if (size < SCREEN_SIZE_S) {
      return LOAD_MORE_S_M;
    } else if (size < SCREEN_SIZE_M) {
      return LOAD_MORE_S_M;
    } else if (size < SCREEN_SIZE_L) {
      return LOAD_MORE_L;
    } else if (size > SCREEN_SIZE_L) {
      return LOAD_MORE_XL;
    }
  })

  function handleResize() {
    const size = window.innerWidth;
    if (size < SCREEN_SIZE_S) {
      setInitialCardsAmount(INITIAL_MOVIES_S);
      setAddMoreCardsAmount(LOAD_MORE_S_M);
    } else if (size < SCREEN_SIZE_M) {
      setInitialCardsAmount(INITIAL_MOVIES_M);
      setAddMoreCardsAmount(LOAD_MORE_S_M);
    } else if (size < SCREEN_SIZE_L) {
      setInitialCardsAmount(INITIAL_MOVIES_L);
      setAddMoreCardsAmount(LOAD_MORE_L);
    } else if (size > SCREEN_SIZE_L) {
      setInitialCardsAmount(INITIAL_MOVIES_L);
      setAddMoreCardsAmount(LOAD_MORE_XL);
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
        {NOT_FOUND_SAVED_ERR_TEXT}
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