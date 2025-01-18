import React, { useState, useEffect } from 'react';

function StartScreen({startGame}) {
    return ( 

<div className='text-4xl text-black font-bold'>
    <div>Memory Matching Game</div>
    <button className='bg-purple-950 p-4 rounded-xl shadow-xl text-white mt-20' onClick={startGame}>
        Start Game
    </button>
</div>


     );
}

export default StartScreen;

