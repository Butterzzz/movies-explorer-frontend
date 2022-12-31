import React, { useContext, useEffect } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import './Profile.css'

const Profile = ({ onSubmit, onSignOut, profileError }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();

  // Подставляем значения в форму из контекста пользователя
  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmit(values.name, values.email);
    resetForm();
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          className="profile__form profile-form"
          onSubmit={handleSubmit}
        >

          <div className="profile-form__container">
            <label className="profile-form__field" htmlFor="profile-name">Имя</label>
            <input
              className="profile-form__input"
              id="profile-name"
              type="text"
              name="name"
              placeholder="Имя"
              value={values.name || ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" // латиница, кириллица, пробел или дефис
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
              value={values.email || ""}
              onChange={handleChange}
              required
            />

          </div>

          <div className="profile-form__nav">

            <span className="profile-form__error">{errors.email || errors.name}</span>
            <span className="profile__error">{profileError}</span>

            <button
              className="profile__button profile__button_type_edit button"
              type="submit"
              disabled={!isValid || (values.name === currentUser.name && values.email === currentUser.email)}
            >
              Редактировать
            </button>

            <button
              className="profile__button profile__button_type_logout button"
              onClick={onSignOut}>
              Выйти из аккаунта
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Profile