import React from 'react'
import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>

        <div className="about-project__content">
          <div className="about-project__stages">
            <h3 className="about-project__content-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__content-desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__deadlines">
            <h3 className="about-project__content-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__content-desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline__scale timeline__scale_type_colorful">1 неделя</div>
          <div className="timeline__scale timeline__scale_type_grayscale">4 недели</div>
          <div className="timeline__text">Back-end</div>
          <div className="timeline__text">Front-end</div>
        </div>

      </div>
    </section>
  )
}

export default AboutProject