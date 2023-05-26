import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./deck.css";
import Cards from "../../containers/cards/Cards";

const Deck = ({ cardInfo, setCards, cardAddedToDeck, setCardAddedToDeck }) => {
  const dispatch = useDispatch();

  // Safe access using optional chaining and nullish coalescing operator
  const safeCardInfo = cardInfo ?? [];
  const safeSetCards = setCards ?? (() => {});
  const safeCardAddedToDeck = cardAddedToDeck ?? {};
  const safeSetCardAddedToDeck = setCardAddedToDeck ?? (() => {});

  return (
    <div className="deck-container">
      <div className="deck">
        <div>
        {safeCardInfo.map((card, index) => {
          if (index < safeCardInfo.length - 1) {
            return (
                <Cards
                  cardAddedToDeck={safeCardAddedToDeck}
                  setCardAddedToDeck={safeSetCardAddedToDeck}
                  key={index}
                  cardInfo={safeCardInfo[index + 1]}
                  // savedCardsData={savedCardsData[index + 1]}
                  index={index}
                />
            );
          }
          return null;
        })}
        </div>
        {/* <div>
          {extra_deck.map((card, index) => (
            <Cards
              cardAddedToDeck={cardAddedToDeck}
              setCardAddedToDeck={setCardAddedToDeck}
              key={index}
              cardInfo={cards[index + 1]}
              // savedCardsData={savedCardsData[index + 1]}
              index={index}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Deck;
