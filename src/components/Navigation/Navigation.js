import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <nav className="menu" >
            <ul className="menu__list menu__list-auth">
              <li className="menu__list-item"><NavLink to='/movies' className="menu__link link" activeClassName="menu__link_active">Фильмы</NavLink></li>
              <li className="menu__list-item"><NavLink to='/saved-movies' className="menu__link link" activeClassName="menu__link_active">Сохранённые фильмы</NavLink></li>
            </ul>
            <NavLink to="/profile" className="menu__profile button">Аккаунт</NavLink>
            <button className="menu__button button" type="button" />
          </nav >
        </>
      ) : (
        <nav className="menu">
          <ul className="menu__list menu__list_not-auth">
            <li className="menu__list-item"><NavLink to="/signup" className="menu__link menu__link_type_signup link">Регистрация</NavLink></li>
            <li className="menu__list-item"><NavLink to="/signin" className="menu__link menu__link_type_signin button">Войти</NavLink></li>
          </ul>
        </nav>)}
    </>
  )
}

export default Navigation