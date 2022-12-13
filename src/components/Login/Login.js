import React from 'react'
import Form from '../Form/Form'
import './Login.css'

const Login = () => {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        name="login-form"
        submitText="Войти"
        isLogin={true}
      >
        <label className="form__field" htmlFor="login-email">E-mail</label>
        <input
          className="form__input"
          id="login-email"
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />

        <span className="form__error">Ошибка</span>

        <label className="form__field" htmlFor="login-password">Пароль</label>
        <input
          className="form__input"
          id="login-password"
          type="password"
          name="password"
          placeholder="Пароль"
          required
        />

        <span className="form__error">Ошибка</span>
      </Form>
    </section>
  )
}

export default Login