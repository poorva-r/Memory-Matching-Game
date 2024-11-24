import React, { useState, useEffect } from 'react';


const FinishedScreen = ({score, startGame}) => {
    return ( 
        <div>
            <div>Game Finished</div>
            <div>Your Score is {score} </div>
            <button className='bg-blue-300' onClick={startGame}>
                Restart Game
            </button>
        </div>
     );
}
 
export default FinishedScreen;