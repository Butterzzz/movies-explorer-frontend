import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>

        <ul className="portfolio__list">
          <li className="portfolio__list-item"><a href="https://github.com/Butterzzz/how-to-learn" className="portfolio__link link" target="_blank" rel="noopener noreferrer">Статичный сайт</a></li>
          <li className="portfolio__list-item"><a href="https://github.com/Butterzzz/russian-travel" className="portfolio__link link" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a></li>
          <li className="portfolio__list-item"><a href="https://github.com/Butterzzz/react-mesto-api-full" className="portfolio__link link" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio