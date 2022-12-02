import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="page">
      <Switch>

        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/movies">
          Movies will be here
        </Route>

        <Route path="/saved-movies">
          Saved movies will be here
        </Route>

        <Route path="/profile">
        <Header />
          Profile will be here
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