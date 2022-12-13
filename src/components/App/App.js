import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import Footer from '../Footer/Footer'
import moviesList from '../../data/movies'

const App = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    setMovies(moviesList);
  }, [])

  return (
    <div className="page">
      <Switch>

        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          <Header
            isLoggedIn={true}
          />
          <Movies
            movies={movies} />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header
            isLoggedIn={true}
          />
          <SavedMovies
            movies={movies} />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header
            isLoggedIn={true}
          />
          <Profile />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>

    </div>
  )
}

export default App