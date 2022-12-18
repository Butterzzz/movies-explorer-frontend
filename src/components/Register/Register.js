import React from 'react'
import Form from '../Form/Form'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import './Register.css'

const Register = ({ onRegister, isLoading, requestError }) => {
  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister(values.name, values.email, values.password);
    resetForm();
  }

  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        name="register-form"
        onSubmit={handleSubmit}
        submitText={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        isRegister={true}
        isValid={isValid}
        isLoading={isLoading}
        requestError={requestError}
      >
        <label className="form__field" htmlFor="register-name">Имя</label>
        <input
          className="form__input"
          id="register-name"
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

        <span className="form__error">{errors.name}</span>

        <label className="form__field" htmlFor="register-email">E-mail</label>
        <input
          className="form__input"
          id="register-email"
          type="email"
          name="email"
          placeholder="E-mail"
          value={values.email || ""}
          onChange={handleChange}
          required
        />

        <span className="form__error">{errors.email}</span>

        <label className="form__field" htmlFor="register-password">Пароль</label>
        <input
          className="form__input"
          id="register-password"
          type="password"
          name="password"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          minLength="8"
          required
        />

        <span className="form__error">{errors.password}</span>
      </Form>
    </section>
  )
}

export default Register