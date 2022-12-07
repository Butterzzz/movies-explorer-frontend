import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import './Header.css'

const Header = ({ isAuth }) => {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname ==='/' && 'header_type_colored'}`}>
      <div className="header__container">
        <Logo />
        {isAuth ? <Navigation /> : <nav className="header__menu">
          <NavLink to="/signup" className="header__signup link">Регистрация</NavLink>
          <NavLink to="/signin" className="header__signin button">Войти</NavLink>
        </nav>}
      </div >
    </header >
  )
}

export default Header