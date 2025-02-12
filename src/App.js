import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import FinishedScreen from "./components/FinishedScreen";
import TimeUp from "./components/TimeUp";

function App() {
  const [gameStarted, setgameStarted] = useState(false);
  const [gameFinished, setgameFinished] = useState(false);
  const [Score, setScore] = useState(0);
  const [timeup, setTimeup] = useState(false);
  const [timer, setTimer] = useState(20);

  const startGame = () => {
    setgameStarted(true);
    setgameFinished(false);
    setScore(0);
    setTimer(20);
    setTimeup(false);
  };

  const finishGame = () => {
    setgameFinished(true);
    setgameStarted(false);
  };

  useEffect(() => {
    // start the timer when started is true
    let timerInterval;
    if (gameStarted && timer > 0) {
      timerInterval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }

    if (timer === 0) {
      setTimeup(true);
      setgameStarted(false);
    }

    return () => clearInterval(timerInterval);
  }, [gameStarted, timer]);

  return (
    <div className="cursor-custom bg-light-bg bg-cover bg-center text-center flex items-center justify-center min-h-screen">
      {/* if game has not started and not finished then head to start screen and update game started or not */}
      {!gameStarted && !gameFinished && !timeup && (
        <StartScreen startGame={startGame} />
      )}
      {/* if game has started and is running then show the game component */}
      {gameStarted && !timeup && (
        <Game
          finishGame={finishGame}
          setScore={setScore}
          score={Score}
          timer={timer}
        />
      )}
      {timeup && <TimeUp startGame={startGame} />}
      {/* if game has finished show the finish screen and update if restart the game or not */}
      {gameFinished && <FinishedScreen score={Score} startGame={startGame} />}
    </div>
  );
}

export default App;
