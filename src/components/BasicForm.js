import React from 'react'
import styles from '../css/BasicForm.module.css'

const BasicForm = ({ question, animate }) => {
  return (
    <div className={`${styles.container} ${animate ? styles.animate : null}`}>
        <span>{question}</span>
        <input type='text' />
    </div>
  )
}

export default BasicForm