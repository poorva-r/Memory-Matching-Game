import React, { useState, useEffect } from 'react';


const FinishedScreen = ({score, startGame}) => {
    return ( 
        <div>
            <div className='text-3xl font-bold'>Congratulations</div>
            <div className='text-3xl font-bold mt-4'>Your Score is {score} </div>
            <button className='bg-purple-950 p-4 rounded-xl shadow-xl text-white mt-12 text-3xl' onClick={startGame}>
                Restart Game
            </button>
        </div>
     );
}
 
export default FinishedScreen;