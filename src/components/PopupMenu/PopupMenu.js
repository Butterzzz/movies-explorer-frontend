import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PopupMenu.css'

const PopupMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEsc)
    return () => document.removeEventListener('keydown', closeByEsc)
  }, [onClose])

  return (
    <div className={`popup ${isOpen && "popup_opened"}`} onClick={onClose}>
      <div className="popup__container">

        <nav className="popup__menu" >
          <ul className="popup__menu-list">

            <li className="popup__menu-list-item">
              <NavLink
                to='/'
                className="popup__menu-link link"
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>

            <li className="popup__menu-list-item">
              <NavLink
                to='/movies'
                className="popup__menu-link link"
                activeClassName="popup__menu-link_active"
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>

            <li className="popup__menu-list-item">
              <NavLink
                to='/saved-movies'
                className="popup__menu-link link"
                activeClassName="popup__menu-link_active"
                onClick={onClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/profile"
            className="popup__menu-profile button"
            onClick={onClose}
          >
            Аккаунт
          </NavLink>
        </nav >

      </div>

      <button
        className="popup__button popup__button_action_close button"
        type="button"
        aria-label="Закрыть меню"
        onClick={onClose}
      />

    </div>
  )
}

export default PopupMenu