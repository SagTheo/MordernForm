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
        if (userInput === '') {
          setAnswers([...answers, 'No answer given'])
        } else {
          setAnswers([...answers, userInput])
          setUserInput('')
        }
        
        setAnimate(true)
        setTimeout(() => {
          setCurrQuestion(currQuestion + 1)
        }, 200)
        setTimeout(() => {
          setAnimate(false)
          putFocus.focus()
        }, 1500)
      }}
            className={styles.nextButton}
      >Next</button>
    </div>
  );
}

export default App;
