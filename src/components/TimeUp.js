import React, { useState, useEffect } from "react";
import { sounds } from "../utils/sounds";

const TimeUp = ({ startGame }) => {
  sounds.lose.currentTime = 0;
  sounds.lose.play();

  const handleButtonClick = () => {
    sounds.click.currentTime = 0;
    sounds.click.play();
    setTimeout(() => {
      startGame();
    }, 200);
  };

  return (
    <div className="font-prime font-bold">
      <div className="text-4xl font-bold mb-4 text-white">Time Up!</div>
      <button
        className="cursor-custom group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-900 border-2 border-white backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-200/50"
        onClick={handleButtonClick}
      >
        <span className="text-2xl">Restart Game</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
    </div>
  );
};

export default TimeUp;
