import React from "react";
import { sounds } from "../utils/sounds";

function StartScreen({ startGame }) {
  const handleButtonClick = () => {
    sounds.click.currentTime = 0;
    sounds.click.play();
    setTimeout(()=>{
      startGame();
    }, 200);
  }
  return (
    <div className="text-4xl md:text-5xl font-prime">
      <div className="mb-10 font-semibold text-white">Twin Tiles</div>
      <button
        className="cursor-custom group/button relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gray-900 backdrop-blur-lg px-6 py-2 text-base font-semibold border-2 border-white text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-200/50"
        onClick={handleButtonClick}
      >
        <span className="text-2xl">Start</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
    </div>
  );
}

export default StartScreen;
