import { useState } from 'react';
import './App.css';
import BasicForm from './components/BasicForm';
import { questions } from './content/questions'

function App() {
  const [currQuestion, setCurrQuestion] = useState(0)
  const [animate, setAnimate] = useState(false)

  return (
    <div className="App">
      {
        currQuestion < questions.length ?
          <BasicForm question={questions[currQuestion]}
                  animate={animate} 
          />
        :
        <span>Thank you for your answers</span>
      } 

      <button onClick={() => { 
        setAnimate(true)
        setTimeout(() => {
          setCurrQuestion(currQuestion + 1)
        }, 200)
        setTimeout(() => {
          setAnimate(false)
        }, 1500)
      }}>Next</button>
    </div>
  );
}

export default App;
