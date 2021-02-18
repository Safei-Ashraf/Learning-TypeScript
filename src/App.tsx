import { useState } from 'react';
import QuestionCard from "./components/QuestionCard"

const startTrivia = async () => {

}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

}


const App = () => {
  let TOTAL_QUESTIONS: number = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  return (
    <div className="App">
      <h1>ANIME QUIZ</h1>
      <button onClick={startTrivia} className="start">Start</button>
      <p className="score">Score: </p>
      <p>Loading Questions....</p>
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      />
      <button onClick={nextQuestion} className="next">Next Question</button>

    </div>
  );
}

export default App;
