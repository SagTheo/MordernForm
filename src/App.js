import { useEffect, useState } from 'react';
import styles from './App.module.css'
import BasicForm from './components/BasicForm';
import { questions } from './content/questions'

function App() {
  const [putFocus, setPutFocus] = useState()
  const [currQuestion, setCurrQuestion] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [answers, setAnswers] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [displayNextBtn, setDisplayNextBtn] = useState(true)

  useEffect(() => {
    setPutFocus(document.querySelector('.putFocus'))
  }, [])

  useEffect(() => {
    if (putFocus) {
      putFocus.focus()
    }
  }, [putFocus])

  return (
    <div className={styles.App}>
      {
        currQuestion < questions.length ?
          <BasicForm question={questions[currQuestion]}
                     animate={animate} 
                     userInput={userInput}
                     setUserInput={setUserInput}
          />
        :
        <div className={styles.answers}>
          <span>Your answers:</span> 
          <div>
          {
            answers.map((answer, index) => {
              return (
                <div className={styles.questionAndAnswer}>
                  <span>{questions[index]}</span>
                  <span>{answer}</span>
                </div>
              )
            })
          }
          </div>
        </div>
      } 

      <button onClick={() => {
        setDisabled(true)
        if (userInput === '') {
          setAnswers([...answers, 'No answer given'])
        } else {
          setAnswers([...answers, userInput])
          setUserInput('')
        }
        
        setAnimate(true)
        setTimeout(() => {
          setCurrQuestion(currQuestion + 1)
          if (currQuestion === questions.length - 1) {
            setDisabled(true)
            setDisplayNextBtn(false)
          }
        }, 1000)
        setTimeout(() => {
          setAnimate(false)
          setDisabled(false)
          putFocus.focus()
        }, 1500)
      }}
            className={`${styles.nextButton} ${disabled ? styles.nextBtnOff : null} ${displayNextBtn ? null : styles.hideNextBtn}`}
            disabled={disabled}
      >Next</button>
    </div>
  );
}

export default App;
