import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import './App.css'
// Компоненты
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
// API
import * as MainApi from '../../utils/MainApi'
import * as MoviesApi from '../../utils/MoviesApi'
// Утилиты
import { searchMoviesByKeyword } from '../../utils/utils'

const App = () => {
  const [currentUser, setCurrentUser] = useState({}); // Текущий пользователь
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Статус пользователя
  const [isLoading, setIsLoading] = useState(false);
  const [apiMovies, setApiMovies] = useState([]); // Массив с фильмами с сервера BeatfilmMoviesApi
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]); // Массив сохраненных, текущим пользователем, фильмов
  const [isShortMovies, setIsShortMovies] = useState(false);

  const [notFound, setNotFound] = useState(false);
  const [moviesError, setMoviesError] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileError, setProfileError] = useState('');

  const history = useHistory();
  const location = useLocation();

  function clearAllErrors() {
    setRegisterError('');
    setLoginError('');
    setProfileError('');
  }

  // ----------------------------- USERS ----------------------------- //

  // Регистрация пользователя
  function handleRegister(name, email, password) {
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then(data => {
        if (data._id) {
          handleLogin(email, password)
        }
      })
      .catch((err) => {
        if (err === 409) {
          return setRegisterError('Пользователь с таким email уже существует');
        }
        if (err === 500) {
          return setRegisterError('На сервере произошла ошибка');
        } else {
          return setRegisterError('При регистрации пользователя произошла ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // Логин
  function handleLogin(email, password) {
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
          return setLoginError('Вы ввели неправильный логин или пароль');
        }
        if (err === 400) {
          return setLoginError('При авторизации произошла ошибка. Переданный токен некорректен');
        }
        if (err === 500) {
          return setLoginError('На сервере произошла ошибка');
        } else {
          return setLoginError('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // Редактирование профиля
  function handleUpdateUser(name, email) {
    setIsLoading(true);
    MainApi.updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setProfileError('Профиль успешно обновлен');
      })
      .catch((err) => {
        console.log(err)
        if (err === 409) {
          return setProfileError('Пользователь с таким email уже существует');
        } else {
          return setProfileError('При обновлении профиля произошла ошибка');
        }
      })
      .finally(() => { setIsLoading(false); })
  }

  // Проверка токена
  function tokenCheck() {
    const path = location.pathname;
    const token = localStorage.getItem('jwt');
    if (token) {
      MainApi.getUserInfo(token)
        .then(res => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res)
            history.push(path);
          }
        })
        .catch(err => console.log(err));
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn])

  // Выход из профиля
  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('searchValue');
    localStorage.clear();
    setCurrentUser({});
    setApiMovies([]);
    setMovies([]);
    setIsLoggedIn(false);
    clearAllErrors();
    history.push('/');
  };

  // ----------------------------- MOVIES ----------------------------- //

  function handleShortMovies(evt) {
    setIsShortMovies(evt.target.checked);
  }

  // Поиск фильмов
  function handleSearchMovie(keyword) {
    localStorage.setItem('searchValue', keyword);
    setIsLoading(true);
    setMovies([]);
    setNotFound(false);
    setMoviesError(false);

    if (apiMovies.length === 0) {
      MoviesApi.getAllMovies()
        .then(resMovies => {
          setApiMovies(resMovies);
          const searchResult = searchMoviesByKeyword(resMovies, keyword, isShortMovies);

          if (searchResult.length === 0) {
            setNotFound(true);
            setMovies([]);
          } else {
            localStorage.setItem('movies', JSON.stringify(searchResult));
            setMovies(JSON.parse(localStorage.getItem('movies')));
          }
        })
        .catch(() => {
          setMoviesError(true);
          setMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      const searchResult = searchMoviesByKeyword(apiMovies, keyword, isShortMovies);

      if (searchResult.length === 0) {
        setMovies([]);
        setIsLoading(false);
        setNotFound(true);
      } else if (searchResult.length !== 0) {
        localStorage.setItem('movies', JSON.stringify(searchResult));
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setIsLoading(false);
      } else {
        setMoviesError(true);
        setMovies([]);
      }
    }
  }

  function searchSavedMovies(keyword) {
    const movies = JSON.parse(localStorage.getItem('savedMovies'));
    const searchResult = searchMoviesByKeyword(movies, keyword, isShortMovies);
    setSavedMovies(searchResult);
  }

  // Сохранение фильма (MainApi.createMovie)
  function saveMovie(movie) {
    MainApi.createMovie(movie)
      .then((data) => {
        const movies = [data, ...savedMovies];
        setSavedMovies(prev => ([data, ...prev]));
        localStorage.setItem('savedMovies', JSON.stringify(movies))
      })
      .catch(err => console.log(err));
  }

  // Удаление сохранённого фильма по id (MainApi.deleteMovie(movieId))
  function handleDeleteMovie(movieId) {
    MainApi.deleteMovie(movieId)
      .then(() => {
        const filteredSavedMovies = savedMovies.filter((item) => {
          return item._id !== movieId
        });
        setSavedMovies(filteredSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(filteredSavedMovies));
      })
      .catch(err => console.log(err));
  }

  // Получение всех сохранённые текущим пользователем фильмов (MainApi.getSavedMovies)
  useEffect(() => {
    if (isLoggedIn) {
      const movies = localStorage.getItem('movies');
      const savedMovies = localStorage.getItem('savedMovies');
      if (movies) {
        setMovies(JSON.parse(movies));
      }
      if (savedMovies) {
        setSavedMovies(JSON.parse(savedMovies));
      } else {
        MainApi.getSavedMovies()
          .then((res) => {
            setSavedMovies(res);
            localStorage.setItem('savedMovies', JSON.stringify(res));
          })
          .catch(err => console.log(err));
      }
    }
  }, [isLoggedIn])

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
              isLoading={isLoading}
              movies={movies}
              handleSearchMovies={handleSearchMovie}
              handleShortMovies={handleShortMovies}
              isShortMovies={isShortMovies}
              handleSaveMovie={saveMovie}
              handleDeleteMovie={handleDeleteMovie}
              moviesError={moviesError}
              notFound={notFound}
            />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies
              isLoading={isLoading}
              movies={savedMovies}
              handleSearchSavedMovies={searchSavedMovies}
              handleShortMovies={handleShortMovies}
              isShortMovies={isShortMovies}
              handleDeleteMovie={handleDeleteMovie}
              moviesError={moviesError}
              notFound={notFound}
            />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Profile
              onSubmit={handleUpdateUser}
              onSignOut={handleSignOut}
              profileError={profileError}
            />
          </ProtectedRoute>

          <Route path="/signup">
            <Register
              onRegister={handleRegister}
              isLoading={isLoading}
              registerError={registerError}
              clearErrors={clearAllErrors}
            />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={handleLogin}
              isLoading={isLoading}
              loginError={loginError}
              clearErrors={clearAllErrors}
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