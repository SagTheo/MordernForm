import './App.css';
import BasicForm from './components/BasicForm';
import { questions } from './content/questions'

function App() {
  return (
    <div className="App">
      {
        questions.map(question => {
          return (
            <BasicForm question={question} />
          )
        })
      }
    </div>
  );
}

export default App;
