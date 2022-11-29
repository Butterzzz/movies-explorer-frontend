import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <nav className="header__menu">
          <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
          <NavLink to="/signin" className="header__signin">Войти</NavLink>
        </nav>
      </div >
    </header >
  )
}

export default Header