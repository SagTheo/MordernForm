import React from 'react'
import styles from '../css/BasicForm.module.css'

const BasicForm = ({ question, animate, userInput, setUserInput }) => {
  return (
    <div className={`${styles.container} ${animate ? styles.animate : null}`}>
        <span>{question}</span>
        <input type='text' 
               value={userInput} 
               onChange={e => setUserInput(e.target.value)}
               className={`${styles.input} putFocus`} />
    </div>
  )
}

export default BasicForm