import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__content">
          <p className="footer__copyright">&copy; Сергей Гринченко. 2022</p>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="https://practicum.yandex.ru" className="footer__link link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a></li>
            <li className="footer__list-item"><a href="https://github.com/Butterzzz" className="footer__link link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li className="footer__list-item"><a href="https://t.me/Butterzzz" className="footer__link link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer