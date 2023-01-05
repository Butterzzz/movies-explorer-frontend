import React from 'react'
import './RoundedSwitch.css'

const RoundedSwitch = ({ handleShortMovies, isShortMovies }) => {
  return (
    <div className="rounded-switch">
      <label className="rounded-switch__container">
        <input
          className="rounded-switch__input"
          type="checkbox"
          onChange={handleShortMovies}
          checked={isShortMovies ? true : false}
        />
        <span className="rounded-switch__slider"></span>
      </label>
      <span className="rounded-switch__text">Короткометражки</span>
    </div>
  )
}

export default RoundedSwitch