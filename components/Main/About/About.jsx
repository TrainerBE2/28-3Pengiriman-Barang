import { ReactComponent as AboutImg } from '../../../public/images/about-ilustration.svg'
import classNames from 'classnames'
import { useTranslate } from '../../../hooks/useTranslate'
import layout from '../../../styles/Layout.module.scss'
import style from './About.module.scss'

function About() {
  const translate = useTranslate()

  return (
    <section
      className={classNames(
        [style.about],
        [layout.section],
        [layout.container]
      )}
      id='about'
    >
      <div className={classNames([style.about__container], [layout.grid])}>
        <div className={style.about__data}>
          <h2 className={[layout['section__title-center']]}>
            {translate.main.about.title}
          </h2>
          <p className={style.about__description}>
            {translate.main.about.description}
          </p>
        </div>

        <AboutImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob]
          )}
        />
      </div>
    </section>
  )
}

export default About
