import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

const SavedMovies = ({ movies }) => {
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

export default SavedMovies