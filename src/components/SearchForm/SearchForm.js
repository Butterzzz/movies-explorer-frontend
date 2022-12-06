import React from 'react'
import RoundedSwitch from '../RoundedSwitch/RoundedSwitch'
import './SearchForm.css'

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">

        <form className="search-form">
          <span className="search-form__icon"></span>
          <input className="search-form__input" type="text" placeholder="Фильм" minLength="2" required />
          <button className="search-form__button button" type="submit" aria-label="Поиск"></button>
        </form>

        <RoundedSwitch />

      </div>
    </section>
  )
}

export default SearchForm