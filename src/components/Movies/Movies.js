import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './Movies.css'

const Movies = ({ isLoading, handleShortMovies, isShortMovies, ...props }) => {

  return (
    <main className="content">

      <SearchForm
        isShortMovies={isShortMovies}
        handleShortMovies={handleShortMovies}
        handleSearchMovies={props.handleSearchMovies}
      />

      <MoviesCardList
        isLoading={isLoading}
        movies={props.movies}
        handleSaveMovie={props.handleSaveMovie}
        handleDeleteMovie={props.handleDeleteMovie}
        moviesError={props.moviesError}
        notFound={props.notFound}
      />

    </main>
  )
}

export default Movies