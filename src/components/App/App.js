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
import * as MainApi from '../../utils/MainApi'
import * as MoviesApi from '../../utils/MoviesApi'

const App = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [requestError, setRequestError] = useState('');

  const history = useHistory();

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
        if (err === 409) {
          return setRequestError('Пользователь с таким email уже существует');
        }
        if (err === 500) {
          return setRequestError('На сервере произошла ошибка');
        } else {
          return setRequestError('При регистрации пользователя произошла ошибка');
        }
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
        if (err === 401) {
          return setRequestError('Вы ввели неправильный логин или пароль');
        }
        if (err === 400) {
          return setRequestError('При авторизации произошла ошибка. Переданный токен некорректен');
        }
        if (err === 500) {
          return setRequestError('На сервере произошла ошибка');
        } else {
          return setRequestError('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
        }
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

  // Редактирование профиля
  function handleUpdateUser(name, email) {
    setIsLoading(true);
    MainApi.updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err)
        if (err === 409) {
          return setRequestError('Пользователь с таким email уже существует');
        } else {
          return setRequestError('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => { setIsLoading(false); })
  }

  // Выход из профиля
  function signOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    history.push('/');
  };

  // Поиск фильмов
  function handleSearchMovie() {
    setIsLoading(true);
    MoviesApi.getAllMovies()
      .then((res) => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch((err) => console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
      .finally(() => { setIsLoading(false); })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </Route>

          <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Movies
              movies={movies}
              onSearch={handleSearchMovie}
              isLoading={isLoading}
            />
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
              onSubmit={handleUpdateUser}
              onSignOut={signOut}
              requestError={requestError}
            />
          </ProtectedRoute>

          <Route path="/signup">
            <Register
              onRegister={onRegister}
              isLoading={isLoading}
              requestError={requestError}
            />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={onLogin}
              isLoading={isLoading}
              requestError={requestError}
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