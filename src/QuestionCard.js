import React from "react";

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  timer,
  onAnswer,
}) {
  const handleAnswerClick = (option) => {
    const isCorrect = option === question.correct;
    onAnswer(isCorrect);
  };

  return (
    <div className="question-card">
      <h2>
        Question {questionNumber} of {totalQuestions}
      </h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
      <p>Time left: {timer} seconds</p>
    </div>
  );
}

export default QuestionCard;
