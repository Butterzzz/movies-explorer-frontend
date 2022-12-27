import React, { useCallback, useEffect, useState } from 'react'
import './MoviesCard.css'
import { calcMovieDuration } from '../../utils/utils'

const MoviesCard = (props) => {

  const [isSaved, setIsSaved] = useState(false);

  const film = {
    country: props.movie.country || 'Не указано',
    director: props.movie.director || 'Не указано',
    duration: props.movie.duration || 0,
    year: props.movie.year || 'Не указано',
    description: props.movie.description || 'Не указано',
    image: `https://api.nomoreparties.co${props.movie.image?.url}`,
    trailerLink: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || 'Не указано',
    nameEN: props.movie.nameEN || 'Не указано',
    thumbnail: `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`,
    movieId: props.movie.id,
  }

  const isLikedMovie = useCallback(() => {
    if (localStorage.getItem('savedMovies')) {
      let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
      if (savedMovies.some(movie => movie.nameRU === props.movie.nameRU)) {
        setIsSaved(true);
      }
    }
  }, [props.movie.nameRU])

  function handleSaveMovie() {
    props.handleSaveMovie(film);
    setIsSaved(true);
  }

  function handleDeleteMovie() {
    setIsSaved(false);
    props.handleDeleteMovie(props.movie._id);
  }

  function handleDislikeMovie() {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const card = savedMovies.find(movie => movie.nameRU === props.movie.nameRU);
    props.handleDeleteMovie(card._id);
    setIsSaved(false);
  }

  useEffect(() => {
    isLikedMovie();
  }, [isLikedMovie]);

  return (
    <li className="movies__list-item">
      <article className="card">
        <a
          className="card__link"
          href={props.movie.trailerLink}
          target='_blank'
          rel="noreferrer"
          title="Посмотреть трейлер"
        >
          <img className="card__image" src={props.isSavedMovies ? props.movie.image : film.image} alt={props.movie.nameRU} />
        </a>

        <div className="card__description">
          <div className="card__wrapper">
            <h2 className="card__title">{props.movie.nameRU}</h2>

            {props.isSavedMovies ?
              <button type='button' className='card__button button card__button_type_delete' onClick={handleDeleteMovie} />
              : <button type='button' className={`${isSaved ? 'card__button button card__button_type_saved' : 'card__button button'}`}
                onClick={!isSaved ? handleSaveMovie : handleDislikeMovie}></button>}

          </div>
          <p className="card__duration">{calcMovieDuration(props.movie.duration)}</p>
        </div>
      </article>
    </li>
  )
}

export default MoviesCard