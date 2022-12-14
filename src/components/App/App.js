import React, { useState, useEffect } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
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
import * as MainApi from '../../utils/MainApi'
// import * as MoviesApi from '../../utils/MoviesApi'

const App = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setMovies(moviesList);
  }, [])

   // Регистрация
  function onRegister(name, email, password) {
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then(data => {
        if (data._id) {
          history.push('/signin');
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Movies movies={movies} />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies movies={movies} />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Profile />
          </ProtectedRoute>

          <Route path="/signup">
            <Register
              onRegister={onRegister}
              isLoading={isLoading}
            />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App