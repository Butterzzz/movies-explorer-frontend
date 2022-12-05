import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import Footer from '../Footer/Footer'

const moviesList = [
  {
    _id: '1',
    nameRU: 'Клиника',
    duration: '1ч 42м',
    image: 'https://static.kinoafisha.info/k/series_shots/1920x1080/upload/series/frames/9/8/3/389/84a38def317580eb32ccc2adae2e01aa.jpg'
  },
  {
    _id: '2',
    nameRU: 'Клиника',
    duration: '1ч 42м',
    image: 'https://oseriale.ru/images/galery/max800x600/0/images_Scrubs_tOQLWboL4f34r4U.jpg'
  },
  {
    _id: '3',
    nameRU: 'Клиника',
    duration: '1ч 42м',
    image: 'https://www.soyuz.ru/public/uploads/files/2/7482976/2022060614080364c591e431.jpg'
  },
  {
    _id: '4',
    nameRU: 'Клиника',
    duration: '1ч 42м',
    image: 'https://teleprogramma.pro/sites/default/files/nodes/node_1296802_1653649066.jpg'
  },
  {
    _id: '5',
    nameRU: 'Клиника',
    duration: '1ч 42м',
    image: 'https://cdn.7days.ru/pic/ffd/970393/1375417/86.jpg'
  },
];

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
            isAuth={true}
          />
          <Movies
            movies={movies} />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header
            isAuth={true}
          />
          <Movies
            movies={movies} />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header
            isAuth={true}
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