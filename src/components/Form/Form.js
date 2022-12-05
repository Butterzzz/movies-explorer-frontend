import React from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import Logo from '../Logo/Logo'

const Form = ({ name, title, children, onSubmit, submitText, isRegister, isLogin }) => {
  return (
    <section className="form">
      <div className="form__logo-container">
        <Logo />
      </div>
      <form className="form__admin" name={name} onSubmit={onSubmit}>
        <h2 className="form__title">{title}</h2>
        {children}

        <button className="form__button" type="submit">{submitText}</button>
      </form>

      {isRegister && (<div className="form__question-container">
        <p className="form__question-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="form__question-link">Войти</Link>
      </div>)}

      {isLogin && (<div className="form__question-container">
        <p className="form__question-text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="form__question-link">Регистрация</Link>
      </div>)}
    </section>
  )
}

export default Form