import React, { useState, useEffect } from "react";

const FinishedScreen = ({ score, startGame }) => {
  return (
    <div>
      <div className="text-3xl font-bold">Congratulations</div>
      <div className="text-3xl font-bold mt-4 mb-8">Your Score is {score} </div>
      <button
        class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-700/50 border border-white/20"
        onClick={startGame}
      >
        <span class="text-lg">Restart Game</span>
        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div class="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
    </div>
  );
};

export default FinishedScreen;
