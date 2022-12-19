import React, { useState, useEffect } from 'react'
import RoundedSwitch from '../RoundedSwitch/RoundedSwitch'
import './SearchForm.css'

const SearchForm = ({ onSearch }) => {

  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [checkboxStatus, setCheckboxStatus] = useState(false);

  useEffect(() => {
    setErrorMessage('');
  }, [searchValue]);

  function handleValueChange(evt) {
    setSearchValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchValue.length === 0) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }

    onSearch(searchValue);
  }

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
            placeholder="Фильм"
            value={searchValue || ''}
            onChange={handleValueChange}
          />
          <button
            className="search-form__button button"
            type="submit"
            aria-label="Поиск"
          >
          </button>
        </form>

        <RoundedSwitch />

        <span className="search__error">{errorMessage}</span>

      </div>
    </section>
  )
}

export default SearchForm