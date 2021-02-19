import { useState } from 'react';
import QuestionCard from "./components/QuestionCard"
import { fetchQuizQuestions, Difficulty, QuestionState, Question } from './API';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {
  let TOTAL_QUESTIONS: number = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
const startTrivia = async () => {
  setLoading(true);
  setGameOver(false);

  const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  setQuestions(newQuestions);
  setScore(0);
  setUserAnswers([]);
  setNumber(0);
  setLoading(false);
}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  //confirm the game is not over
    if (!gameOver) {
    //record user answer
      const answer = e.currentTarget.value;
      //evalute answer
    const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      //store user selected answers
    const answerObject:AnswerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    }
      //update state
    setUserAnswers((prev) => [...prev,answerObject]);

  }
}

const nextQuestion = () => {
  const nextQuestion = number + 1;
  nextQuestion === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(nextQuestion);

}

  return (
    <div className="App">
      <h1>ANIME QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? <button onClick={startTrivia} className="start">Start</button> : null}
      {!gameOver && <p className="score">Score: {score} </p>}
      {loading && <p>Loading Questions....</p>}
      {!loading && !gameOver && ( <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
      />)}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={nextQuestion} className="next">Next Question</button>
      ): null}

    </div>
  );
}

export default App;
