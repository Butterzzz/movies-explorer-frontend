import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = ({ name = 'Пользователь', email = 'email' }) => {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {name}!</h2>
        <form className="profile__form profile-form">

          <div className="profile-form__container">
            <label className="profile-form__field" htmlFor="profile-name">Имя</label>
            <input
              className="profile-form__input"
              id="profile-name"
              type="text"
              name="name"
              placeholder="Имя"
              required
            />
          </div>

          <div className="profile-form__container">
            <label className="profile-form__field" htmlFor="profile-email">E-mail</label>
            <input
              className="profile-form__input"
              id="profile-email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
          </div>
        </form>

        <span className="profile__error">При обновлении профиля произошла ошибка.</span>

        <a href="/11" className="profile__button profile__button_type_edit">Редактировать</a>
        <Link href="/22" className="profile__button profile__button_type_logout">Выйти из аккаунта</Link>
      </div>
    </section>
  )
}

export default Profile