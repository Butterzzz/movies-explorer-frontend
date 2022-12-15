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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // Логин
  function onLogin(email, password) {
    setIsLoading(true);
    MainApi.authorize(email, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // если у пользователя есть токен в localStorage, эта функция проверит, действующий он или нет
  function tokenCheck() {
    const token = localStorage.getItem('jwt');

    if (token) {
      MainApi.getUserInfo(token)
        .then(res => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res)
            history.push('/movies');
          }
        })
        .catch(err => console.log(err));
    }
  }

  useEffect(() => {
    tokenCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  // Выход из профиля
  function signOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    history.push('/signin');
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
            <Profile
              onLogout={signOut}
            />
          </ProtectedRoute>

          <Route path="/signup">
            <Register
              onRegister={onRegister}
              isLoading={isLoading}
            />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={onLogin}
              isLoading={isLoading}
            />
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