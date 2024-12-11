import React, { useReducer, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";
import quizReducer, { initialState } from "./quizReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const startQuiz = () => dispatch({ type: "START_QUIZ" });
  const handleAnswer = (isCorrect) =>
    dispatch({ type: "ANSWER_QUESTION", payload: isCorrect });
  const restartQuiz = () => dispatch({ type: "RESTART_QUIZ" });

  useEffect(() => {
    if (!state.quizStarted || state.quizEnded) return;
    if (state.timer <= 0) {
      handleAnswer(false);
      return;
    }
    const timerId = setInterval(
      () => dispatch({ type: "DECREMENT_TIMER" }),
      1000
    );
    return () => clearInterval(timerId);
  }, [state.quizStarted, state.quizEnded, state.timer]);

  return (
    <div className="quiz-app">
      {state.quizStarted ? (
        state.quizEnded ? (
          <ResultCard
            score={state.score}
            previousScore={state.previousScore}
            onRestart={restartQuiz}
          />
        ) : (
          <QuestionCard
            question={state.questions[state.currentQuestion]}
            questionNumber={state.currentQuestion + 1}
            totalQuestions={state.questions.length}
            timer={state.timer}
            onAnswer={handleAnswer}
          />
        )
      ) : (
        <div className="start-page">
          <h2>Quiz App</h2>
          <button className="start-button" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
