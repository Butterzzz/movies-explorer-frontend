import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './Movies.css'

const Movies = ({ movies, handleSearchMovie, isLoading }) => {

  return (
    <main className="content">
      <SearchForm
        handleSearchMovie={handleSearchMovie}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
        />
      )
      }


    </main>
  )
}

export default Movies