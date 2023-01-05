import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RoundedSwitch from '../RoundedSwitch/RoundedSwitch'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import './SearchForm.css'

const SearchForm = ({ handleShortMovies, isShortMovies, ...props }) => {
  const location = useLocation()
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();

    isValid ? (
      props.handleSearchMovies(values.search)
    ) : (
      setErrorMessage('Нужно ввести ключевое слово')
    )
  }

  function onSubmitSavedMovies(evt) {
    evt.preventDefault();

    isValid ? (
      props.handleSearchSavedMovies(values.search)
    ) : (
      setErrorMessage('Нужно ввести ключевое слово')
    )
  }

  useEffect(() => {
    setErrorMessage("");
  }, [isValid]);

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('searchValue')) {
      const searchValue = localStorage.getItem('searchValue');
      values.search = searchValue;
      setIsValid(true);
    }
  }, [location]);

  return (
    <section className="search">
      <div className="search__container">

        <form className="search-form"
          onSubmit={props.isSavedMovies ? onSubmitSavedMovies : handleSubmit}
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