import React from "react";
import "./deck.css";
import Cards from "../../containers/cards/Cards";

const Deck = ({ deck, setDeck }) => {

  // Safe access using optional chaining and nullish coalescing operator
  const safeDeck = deck ?? [];
  const safeSetDeck = setDeck ?? (() => {});

  if (safeDeck.length === 0) {
    return (
      <div className="deck-container">
        <div className="deck">
          <h1>Deck</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="deck-container">
      <div className="deck">
        <div>
          {safeDeck.map((card, index) => {
            return (
              <Cards
                key={index}
                cardInfo={card}
                deck={safeDeck}
                setDeck={safeSetDeck}
                index={index}
              />
            );
          })}
        </div>
        {/* Uncomment the extra_deck mapping code if needed in the future */}
        {/* <div>
          {extra_deck.map((card, index) => (
            <Cards
              key={index}
              cardInfo={cards[index + 1]}
              deck={safeDeck}
              setDeck={safeSetDeck}
              index={index}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Deck;
