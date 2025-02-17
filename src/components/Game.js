import React, { useState, useEffect } from "react";
import { cardPairs } from "../data/cards";
import Card from "./Card";
import { sounds } from "../utils/sounds";

const Game = ({ finishGame, setScore, score, timer }) => {
  // make a shuffled copy of the cards
  const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
  const [cards, setcards] = useState(shuffledCards);
  const [flippedCards, setflippedCards] = useState([]); // max 2 cards
  const [matchedCards, setmatchedCards] = useState([]);

  const handleCardClick = (id) => {
    // play sound
    sounds.flip.currentTime = 0;
    sounds.flip.play();

    // prevent invalid clicks
    if (matchedCards.includes(id) || flippedCards.includes(id)) return;

    // change state for flipped ones
    const updatedFlipped = [...flippedCards, id];
    setflippedCards(updatedFlipped);

    // check for match if 2 are flipped
    if (updatedFlipped.length === 2) {
      checkMatch(updatedFlipped);
    }
  };

  const checkMatch = (flipped) => {
    // check if content matches of the 2 cards in flipped
    // if match add to matchedCards else keep a delay and remove from flipped

    const [firstId, secondId] = flipped;

    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (firstCard.content === secondCard.content) {
      sounds.ding.currentTime = 0;
      sounds.ding.play();

      setmatchedCards((prev) => [...prev, firstId, secondId]);
      setflippedCards([]);
      setScore(score + 1);
    } else {
      setTimeout(() => {
        setflippedCards([]);
      }, 800);
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      finishGame();
    }
  }, [matchedCards]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 md:gap-8 p-5 md:p-10">
        {cards.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            flipped={flippedCards.includes(card.id)}
            matched={matchedCards.includes(card.id)}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      <div className="mt-18 font-semibold text-2xl text-white font-prime gap-2">
        Time Left <br />
        {`${Math.floor(timer / 60)
          .toString()
          .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`}
      </div>
    </div>
  );
};

export default Game;
