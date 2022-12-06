import React from 'react'
import ME from '../../images/me.jpg'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>

        <div className="about-me__content">

          <div className="about-me__info">
            <h3 className="about-me__name">Сергей</h3>
            <p className="about-me__about">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__text">Я живу в Благовещенске, в 2012 закончил Дальневосточный Государственный Аграрный Университет по специальности "Автомобили и автомобильное хозяйство". Проработал 8 лет IT-специалистом в этом же вузе. Весной 2022 стал учиться в Яндекс.Практикуме на факультете веб-разработки и успешно завершил обучение в январе 2023. Свободное время посвящаю оттачиванию полученных навыков и работе над пет-проектами, совершенствую знания в React. Ищу работу front-end разработчика, чтобы применить полученные знания, решая нестандартные и серьезные задачи. Меня захватывает процесс разработки возможность создавать удобные и полезные продукты и потому что есть возможность удаленной работы.</p>
            <div className="about-me__links">
              <a href="https://github.com/Butterzzz" className="about-me__link link" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://t.me/Butterzzz" className="about-me__link link" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
          </div>

          <div className="about-me__image-container">
            <img src={ME} alt="Фотография Гринченко Сергея" className="about-me__image" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutMe