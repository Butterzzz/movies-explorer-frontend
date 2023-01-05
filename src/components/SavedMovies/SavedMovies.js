import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

const SavedMovies = ({ isLoading, handleShortMovies, isShortMovies, ...props }) => {


  return (
    <main className="content">

      <SearchForm
        isSavedMovies={true}
        isShortMovies={isShortMovies}
        handleShortMovies={handleShortMovies}
        handleSearchSavedMovies={props.handleSearchSavedMovies}
      />

      {<MoviesCardList
        isLoading={isLoading}
        isSavedMovies={true}
        movies={props.movies}
        handleDeleteMovie={props.handleDeleteMovie}
      />
      }

    </main>
  )
}

export default SavedMovies