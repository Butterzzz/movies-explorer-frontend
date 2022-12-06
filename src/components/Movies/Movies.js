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
      <div className="movies__more-button-container">
        <button className="movies__more-button button" type="button">Ещё</button>
      </div>
    </main>
  )
}

export default Movies