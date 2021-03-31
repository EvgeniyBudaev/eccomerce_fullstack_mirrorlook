import React from 'react'
import styles from './about.module.scss'
import AboutLeft from './aboutLeft'


const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <AboutLeft />
        </div>
      </div>
    </section>
  )
}

export default About
