import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className="menu" >
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink to='/movies' className="menu__link link" activeClassName="menu__link_active">Фильмы</NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink to='/saved-movies' className="menu__link link" activeClassName="menu__link_active">Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <NavLink to="/profile" className="menu__profile button">Аккаунт</NavLink>
      </nav >
      <button className="menu__button button" type="button" />
    </>
  )
}

export default Navigation