import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GamePage.css";

const GamePage = () => {
  // State to store the randomly generated target number
  const [targetNumber, setTargetNumber] = useState(generateRandom());
  // User's current input guess
  const [guess, setGuess] = useState("");
  // Feedback to show the user (Too high, Too low, Correct, etc.)
  const [feedback, setFeedback] = useState("");
  // Tracks how many guesses the user has made
  const [attempts, setAttempts] = useState(0);
  // Stores the high score from localStorage (least number of attempts)
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore"));
  // Timer value in seconds
  const [timer, setTimer] = useState(0);
  // Flag to check if the game is over
  const [gameOver, setGameOver] = useState(false);
  // Hook to navigate the user
  const navigate = useNavigate();

  // Redirects user to login page if not authenticated
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      alert("Please login to access the game.");
      navigate("/");
    }
  }, [navigate]);

  // Generates a random number between 1 and 100
  function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Starts a timer that increments every second until the game is over
  useEffect(() => {
    let interval = null;
    if (!gameOver) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    // Clear timer when component unmounts or game ends
    return () => clearInterval(interval);
  }, [gameOver]);

  // Handles the guess submission
  const handleGuess = () => {
    const num = parseInt(guess);

    // Validate input range
    if (isNaN(num) || num < 1 || num > 100) {
      setFeedback("Enter a valid number between 1 and 100.");
      return;
    }

    // Increase attempt count
    setAttempts((prev) => prev + 1);

    // Provide feedback based on guess comparison
    if (num > targetNumber) {
      setFeedback("Too high!");
    } else if (num < targetNumber) {
      setFeedback("Too low!");
    } else {
      // User guessed correctly
      setGameOver(true);
      setFeedback(
        `Correct! You took ${attempts + 1} attempts in ${timer} seconds.`
      );

      // Update high score in localStorage if it's a new best
      if (!highScore || attempts + 1 < highScore) {
        setHighScore(attempts + 1);
        localStorage.setItem("highScore", attempts + 1);
      }
    }
  };

  // Resets the game state to start over
  const handleReset = () => {
    setTargetNumber(generateRandom());
    setGuess("");
    setFeedback("");
    setAttempts(0);
    setTimer(0);
    setGameOver(false);
  };

  // Logs out the user and navigates back to login page
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  // Update these parts of your return statement:
  return (
    <div className="game-container fade-in">
      <h2>Guess the Number (1–100)</h2>

      <div className="game-stats">
        <p>Timer: {timer}s</p>
        <p>Attempts: {attempts}</p>
        {highScore && (
          <p className="high-score">High Score: {highScore} attempts</p>
        )}
      </div>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />

      <div className="button-group">
        <button onClick={handleGuess}>Submit Guess</button>
        <button onClick={handleReset}>Reset Game</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <p className={`feedback-message ${gameOver ? "correct-guess" : ""}`}>
        {feedback}
      </p>
    </div>
  );

  // return (
  //   <div className="game-container">
  //     <h2>Guess the Number (1–100)</h2>

  //     {/* Timer display */}
  //     <p>Timer: {timer}s</p>

  //     {/* Input for user to enter their guess */}
  //     <input
  //       type="number"
  //       value={guess}
  //       onChange={(e) => setGuess(e.target.value)}
  //       placeholder="Enter your guess"
  //     />

  //     {/* Submit guess button */}
  //     <button onClick={handleGuess}>Submit Guess</button>

  //     {/* Display game feedback */}
  //     <p>{feedback}</p>

  //     {/* Show number of attempts */}
  //     <p>Attempts: {attempts}</p>

  //     {/* Display high score if available */}
  //     {highScore && <p>High Score: {highScore} attempts</p>}

  //     {/* Button to reset the game */}
  //     <button onClick={handleReset}>Reset Game</button>

  //     <br /><br />

  //     {/* Logout button */}
  //     <button onClick={handleLogout}>Logout</button>
  //   </div>
  // );
};

export default GamePage;
