import React from "react";

function ResultCard({ score, previousScore, onRestart }) {
  return (
    <div className="result-card">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}</p>
      {previousScore !== null && <p>Previous Score: {previousScore}</p>}
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default ResultCard;
