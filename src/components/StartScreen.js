import React, { useState, useEffect } from 'react';

function StartScreen({startGame}) {
    return ( 

<div className='text-3xl text-black'>
    <div>Memory Matching Game</div>
    <button className='bg-blue-500' onClick={startGame}>
        Start Game
    </button>
</div>


     );
}

export default StartScreen;

