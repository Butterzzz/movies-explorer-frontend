import React from 'react'
import Form from '../Form/Form'
import './Register.css'

const Register = () => {
  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        name="register-form"
        submitText="Зарегистрироваться"
        isRegister={true}
      >
        <label className="form__field" htmlFor="register-name">Имя</label>
        <input
          className="form__input"
          id="register-name"
          type="text"
          name="name"
          placeholder="Имя"
          required
        />

        <span className="form__error">Ошибка</span>

        <label className="form__field" htmlFor="register-email">E-mail</label>
        <input
          className="form__input"
          id="register-email"
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />

        <span className="form__error">Ошибка</span>

        <label className="form__field" htmlFor="register-password">Пароль</label>
        <input
          className="form__input"
          id="register-password"
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

export default Register