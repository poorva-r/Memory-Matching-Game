import React, { useState, useEffect } from 'react';
import { cardPairs } from '../data/cards';


const Game = ({finishGame, setScore, score}) => {
    // make a shuffled copy of the cards
    const shuffledCards = [...cardPairs].sort(() => Math.random()-0.5);
    const [cards, setcards] = useState(shuffledCards);


    return ( 
        <div>
            <div>
                Main Game 
            </div>
        </div>
     );
}
 
export default Game;