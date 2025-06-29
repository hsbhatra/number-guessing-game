import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GamePage.css'

const GamePage = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandom());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore'));
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
        alert('Please login to access the game.');
        navigate('/');
    }
    }, []);


  function generateRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (!gameOver) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameOver]);

  const handleGuess = () => {
    const num = parseInt(guess);

    if (isNaN(num) || num < 1 || num > 100) {
      setFeedback('Enter a valid number between 1 and 100.');
      return;
    }

    setAttempts((prev) => prev + 1);

    if (num > targetNumber) setFeedback('Too high!');
    else if (num < targetNumber) setFeedback('Too low!');
    else {
      setGameOver(true);
      setFeedback(`Correct! 🎉 You took ${attempts + 1} attempts in ${timer} seconds.`);

      if (!highScore || attempts + 1 < highScore) {
        setHighScore(attempts + 1);
        localStorage.setItem('highScore', attempts + 1);
      }
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandom());
    setGuess('');
    setFeedback('');
    setAttempts(0);
    setTimer(0);
    setGameOver(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <div className="game-container">
      <h2>Guess the Number (1–100)</h2>
      <p>Timer: {timer}s</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
      {highScore && <p>High Score: {highScore} attempts</p>}
      <button onClick={handleReset}>Reset Game</button>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GamePage;
