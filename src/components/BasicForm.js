import React from 'react'
import styles from '../css/BasicForm.module.css'

const BasicForm = ({ question }) => {
  return (
    <div className={styles.container}>
        <span>{question}</span>
        <input type='text' />
    </div>
  )
}

export default BasicForm