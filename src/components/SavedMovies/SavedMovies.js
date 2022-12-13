import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
// import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

const SavedMovies = ({ movies }) => {
  const savedMovies = movies?.filter(item => item.isSaved === true);

  return (
    <main className="content">
      <SearchForm />
      {/* <Preloader /> */}
      {savedMovies && <MoviesCardList
        moviesList={savedMovies}
      />
      }
    </main>
  )
}

export default SavedMovies