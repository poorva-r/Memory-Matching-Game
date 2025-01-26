import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { sounds } from "../utils/sounds";

const FinishedScreen = ({ score, startGame }) => {

  sounds.fireworks.currentTime = 0;
  sounds.fireworks.play();

  useEffect(() => {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2, // Two particles at a time for alternating colors
        angle: 60,        // Left side
        spread: 55,
        origin: { x: 0 }, // Left edge of the screen
        colors: ["#FFFFFF", "#000000"],
      });

      confetti({
        particleCount: 2,
        angle: 120,       // Right side
        spread: 55,
        origin: { x: 1 }, // Right edge of the screen
        colors: ["#FFFFFF", "#000000"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const handleButtonClick = () => {
    sounds.click.currentTime = 0;
    sounds.click.play();
    setTimeout(() => {
      startGame();
    }, 200);
  }
  
  return (
    <div className="font-prime font-bold">
      <div className="text-4xl font-bold mb-4 text-white">You win!</div>
      {/* <div className="text-4xl font-bold mt-4 mb-8">Your Score is {score} </div> */}
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

export default FinishedScreen;
