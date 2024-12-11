export const initialState = {
  quizStarted: false,
  quizEnded: false,
  currentQuestion: 0,
  score: 0,
  previousScore: null,
  timer: 15,
  questions: [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: "4" },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: "Paris",
    },
    {
      question: "What is the largest planet?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correct: "Jupiter",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
      correct: "Oxygen",
    },
    {
      question: "What is 10 / 2?",
      options: ["3", "5", "10", "20"],
      correct: "5",
    },
    {
      question: "What is 2 + 7?",
      options: ["5", "7", "9", "3"],
      correct: "Shakespeare",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: "8",
    },
  ],
};

function quizReducer(state, action) {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        quizStarted: true,
        quizEnded: false,
        currentQuestion: 0,
        score: 0,
        timer: 15,
      };
    case "ANSWER_QUESTION":
      const isLastQuestion =
        state.currentQuestion === state.questions.length - 1;
      return {
        ...state,
        score: action.payload ? state.score + 1 : state.score,
        currentQuestion: isLastQuestion
          ? state.currentQuestion
          : state.currentQuestion + 1,
        quizEnded: isLastQuestion,
        timer: isLastQuestion ? 0 : 15,
      };
    case "DECREMENT_TIMER":
      return { ...state, timer: state.timer - 1 };
    case "RESTART_QUIZ":
      return { ...initialState, previousScore: state.score };
    default:
      return state;
  }
}

export default quizReducer;
