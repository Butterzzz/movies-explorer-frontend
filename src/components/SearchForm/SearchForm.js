import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'
import RoundedSwitch from '../RoundedSwitch/RoundedSwitch'
// import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import './SearchForm.css'

const SearchForm = ({ handleShortMovies, isShortMovies, ...props }) => {
  // const location = useLocation()
  // const { values, handleChange, isValid } = useFormWithValidation();
  // const [errorMessage, setErrorMessage] = useState('');

  // function handleSubmit(evt) {
  //   evt.preventDefault();

  //   isValid ? (
  //     props.handleSearchMovie(values.search)
  //   ) : (
  //     setErrorMessage('Нужно ввести ключевое слово')
  //   )
  // }

  // useEffect(() => {
  //   setErrorMessage("");
  // }, [isValid]);

  // useEffect(() => {
  //   if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
  //     const searchValue = localStorage.getItem('movieSearch');
  //     values.search = searchValue;
  //     setIsValid(true);
  //   }
  // }, [location]);

  const [searchInput, setSearchInput] = useState('');
  const [isSearchFormValid, setIsSearchFormValid] = useState(true);

  function handleChange(evt) {
    setSearchInput(evt.target.value);
    setIsSearchFormValid(evt.target.checkValidity());
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.handleSearchMovies(searchInput);
  }

  function onSubmitSavedMovies(evt) {
    evt.preventDefault();
    props.handleSearchSavedMovies(searchInput);
  }

  return (
    <section className="search">
      <div className="search__container">

        <form className="search-form"
          onSubmit={props.isSavedMovies ? onSubmitSavedMovies : onSubmit}
        >
          <span className="search-form__icon"></span>
          <input
            className="search-form__input"
            type="text"
            name="search"
            placeholder="Фильм"
            // value={values.search || ""}
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

        {/* <span className="search__error">{errorMessage}</span> */}
        <span className={`search__error ${isSearchFormValid && 'search__error_type_hidden'}`}>Нужно ввести ключевое слово</span>

      </div>
    </section>
  )
}

export default SearchForm