import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './Movies.css'

const Movies = ({ movies, onSearch, isLoading }) => {

  return (
    <main className="content">
      <SearchForm
        onSearch={onSearch}
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