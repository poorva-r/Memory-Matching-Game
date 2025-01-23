import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import FinishedScreen from "./components/FinishedScreen";

function App() {
  const [gameStarted, setgameStarted] = useState(false);
  const [gameFinished, setgameFinished] = useState(false);
  const [Score, setScore] = useState(0);

  const startGame = () => {
    setgameStarted(true);
    setgameFinished(false);
    setScore(0);
  };

  const finishGame = () => {
    setgameFinished(true);
    setgameStarted(false);
  };

  return (
    <div className="cursor-custom bg-light-bg bg-cover bg-center text-center flex items-center justify-center min-h-screen">
      {/* if game has not started and not finished then head to start screen and update game started or not */}
      {!gameStarted && !gameFinished && <StartScreen startGame={startGame} />}
      {/* if game has started and is running then show the game component */}
      {gameStarted && (
        <Game finishGame={finishGame} setScore={setScore} score={Score} />
      )}
      {/* if game has finished show the finish screen and update if restart the game or not */}
      {gameFinished && <FinishedScreen score={Score} startGame={startGame} />}
    </div>
  );
}

export default App;
