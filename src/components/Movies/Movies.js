import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './Movies.css'

const Movies = ({ movies }) => {
  return (
    <main className="content">
      <SearchForm />
      {/* <Preloader /> */}
      {movies && <MoviesCardList
        moviesList={movies}
      />
      }
    </main>
  )
}

export default Movies