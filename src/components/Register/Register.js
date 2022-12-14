import React, { useState } from 'react'
import Form from '../Form/Form'
import './Register.css'

const Register = ({ onRegister, isLoading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNameInput(evt) {
    setName(evt.target.value);
  }

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        name="register-form"
        onSubmit={handleSubmit}
        submitText={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        isRegister={true}
      >
        <label className="form__field" htmlFor="register-name">Имя</label>
        <input
          className="form__input"
          id="register-name"
          type="text"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={handleNameInput}
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
          value={email}
          onChange={handleEmailInput}
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
          value={password}
          onChange={handlePasswordInput}
          required
        />

        <span className="form__error">Ошибка</span>
      </Form>
    </section>
  )
}

export default Register