import React from 'react'
import promoLogo from '../../images/promo-logo.svg'
import './Promo.css'

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#about-project" className="promo__button button">Узнать больше</a>
        </div>
        <img className="promo__image" src={promoLogo} alt="Планета Земля из слов WEB" />
      </div>
    </section>
  )
}

export default Promo