import { useState } from 'react';
import './App.css';
import BasicForm from './components/BasicForm';
import { questions } from './content/questions'

function App() {
  // const [currQuestion, setCurrQuestion] = useState(0)
  const [animate, setAnimate] = useState(false)

  return (
    <div className="App"> 
      <BasicForm question={questions[0]}
                  animate={animate} 
      />
      

      <button onClick={() => {
        // setCurrQuestion(currQuestion + 1) 
        setAnimate(true)
      }}>Next</button>
      <button onClick={() => {
        // setCurrQuestion(currQuestion + 1) 
        setAnimate(false)
      }}>Reset</button>
    </div>
  );
}

export default App;
