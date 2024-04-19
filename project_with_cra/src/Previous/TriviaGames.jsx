import React, { useState, useEffect } from "react";
import "./TriviaGames.css";

const TriviaGames = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetchFunction();
  }, []);

  const fetchFunction = () => {
    fetch(`https://opentdb.com/api.php?amount=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code == 0) {
          setQuestion(data.results[0].question);
          setAnswer(data.results[0].correct_answer);
          setUserAnswer("");
          setResult("");
        } else {
          fetchFunction();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setResult("Correct!");
    } else {
      setResult("Incorrect. The correct anser is: " + answer);
    }
    fetchFunction();
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div id="main">
      <h1 className="title">Trivia Game</h1>
      <p className="question-para">Question: {question}</p>
      <input
        className="answer-input-field"
        type="text"
        value={userAnswer}
        onChange={handleAnswerChange}
      />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      {result && <p className="result-para">{result}</p>}
    </div>
  );
};

export default TriviaGames;
