import React from 'react'
import styles from './button.module.scss'

const Button = (props) => {
  const {text, fn} = props
  return <button className={styles.button} onClick={fn}>{text}</button>
}

export default Button
