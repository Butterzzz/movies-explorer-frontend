import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="menu" >
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink to='/movies' className="menu__link" activeClassName="menu__link_active">Фильмы</NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to='/saved-movies' className="menu__link" activeClassName="menu__link_active">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <NavLink to="/profile" className="menu__link menu__link_type_profile">Аккаунт</NavLink>
    </nav >
  )
}

export default Navigation