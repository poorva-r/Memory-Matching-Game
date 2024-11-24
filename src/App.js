import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import FinishedScreen from "./components/FinishedScreen";

function App() {
  const [gameStarted, setgameStarted] = useState(false);
  const [gameFinished, setgameFinished] = useState(false);
  const [score, setscore] = useState(0);

  const startGame = () => {
    setgameStarted(true);
    setgameFinished(false);
    setscore(0);
  };

  const finishGame = () => {
    setgameFinished(true);
    setgameStarted(false);
  };

  return (
    <div className="text-center">
      {gameStarted ? <Game /> : <StartScreen startGame={startGame} />}
    </div>
  );
}

export default App;
