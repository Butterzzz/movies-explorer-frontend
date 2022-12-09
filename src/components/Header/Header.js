import React from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import './Header.css'

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' && 'header_type_colored'}`}>
      <div className="header__container">
        <Logo />
        <Navigation
          isLoggedIn={isLoggedIn}
        />
      </div >
    </header >
  )
}

export default Header