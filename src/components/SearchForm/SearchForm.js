import React, { useState, useEffect, useContext } from 'react'
import RoundedSwitch from '../RoundedSwitch/RoundedSwitch'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import './SearchForm.css'

const SearchForm = ({ handleSearchMovie, handleShortMovies, isShortMovies }) => {
  const { values, handleChange, isValid } = useFormWithValidation();

  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();

    isValid ? (
      handleSearchMovie(values.search)
    ) : (
      setErrorMessage('Нужно ввести ключевое слово')
    )
  }

  useEffect(() => {
    setErrorMessage("");
  }, [isValid]);

  return (
    <section className="search">
      <div className="search__container">

        <form className="search-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <span className="search-form__icon"></span>
          <input
            className="search-form__input"
            type="text"
            name="search"
            placeholder="Фильм"
            value={values.search || ""}
            onChange={handleChange}
            required
          />
          <button
            className="search-form__button button"
            type="submit"
            aria-label="Поиск"
          >
          </button>
        </form>

        <RoundedSwitch
          handleShortMovies={handleShortMovies}
          isShortMovies={isShortMovies}
        />

        <span className="search__error">{errorMessage}</span>

      </div>
    </section>
  )
}

export default SearchForm