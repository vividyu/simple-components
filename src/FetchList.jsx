// src/FetchList.js
import React, { useState } from "react";

const FetchList = () => {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);

  const getCardValue = (value) => {
    if (value === "ACE") return 1;
    if (["KING", "QUEEN", "JACK"].includes(value)) return 10;
    return Number(value);
  };

  const fetchDeck = async () => {
    const response = await fetch(
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = await response.json();
    setDeckId(data.deck_id);
  };

  const fetchCards = async () => {
    if (!deckId) return;
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
    );
    const data = await response.json();
    setCards(data.cards);

    const cardValues = data.cards.map((card) => getCardValue(card.value));
    const sum = cardValues.reduce((acc, val) => acc + val, 0);
    setCount(sum);
  };

  return (
    <div className="fetch-list">
      <button
        onClick={async () => {
          await fetchDeck();
          await fetchCards();
        }}
      >
        Fetch List
      </button>
      <div className="count-container">
        <p>{count}</p>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <img
            key={card.code}
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchList;
