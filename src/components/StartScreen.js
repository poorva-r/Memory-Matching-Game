import React from "react";

function StartScreen({ startGame }) {
  return (
    <div className="text-4xl md:text-5xl font-kalam text-black font-bold cursor-custom">
      <div className="mb-10">Memory Matching Game</div>
      <button className="cursor-custom group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-700 backdrop-blur-lg px-6 py-2 text-base font-semibold border-2 border-black text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-700/50"
      onClick={startGame}>
        <span className="text-2xl">Start Game</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
    </div>
  );
}

export default StartScreen;
