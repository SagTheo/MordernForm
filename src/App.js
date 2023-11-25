import { useEffect, useState } from 'react';
import './App.css';
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
    <div className="App">
      {
        currQuestion < questions.length ?
          <BasicForm question={questions[currQuestion]}
                     animate={animate} 
                     userInput={userInput}
                     setUserInput={setUserInput}
          />
        :
        <div className='answers'>
          <span>Your answers:</span> 
          <ul>
          {
            answers.map(answer => {
              return (
                <li>{answer}</li>
              )
            })
          }
          </ul>
        </div>
      } 

      <button onClick={() => {
        if (userInput !== '') {
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
            className='nextButton'
      >Next</button>
    </div>
  );
}

export default App;
