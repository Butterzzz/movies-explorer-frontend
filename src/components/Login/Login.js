import React from 'react'
import Form from '../Form/Form'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import './Login.css'

const Login = ({ onLogin, isLoading }) => {
  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin(values.email, values.password);
    resetForm();
  }

  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        name="login-form"
        onSubmit={handleSubmit}
        submitText={isLoading ? 'Вход...' : 'Войти'}
        isLogin={true}
        isValid={isValid}
        isLoading={isLoading}
      >
        <label className="form__field" htmlFor="login-email">E-mail</label>
        <input
          className="form__input"
          id="login-email"
          type="email"
          name="email"
          placeholder="E-mail"
          value={values.email || ""}
          onChange={handleChange}
          required
        />

        <span className="form__error">{errors.email}</span>

        <label className="form__field" htmlFor="login-password">Пароль</label>
        <input
          className="form__input"
          id="login-password"
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

export default Login