import {useState} from 'react';
import DeckFetcher from '../../components/deck/DeckFetcher';
import DeckForm from '../../components/deck/DeckForm';
import DeckDisplay from '../../components/deck/DeckDisplay';

const Deck = ({deck, deckCards, cards, cardAddedToDeck, setDeckCards, setDeck, currentlyEditingDeck, setCurrentlyEditingDeck}) => {
  const safeDeck = deck ?? [];
  const safeSetDeck = setDeck ?? (() => {});

  const [deckData, setDeckData] = useState([]);
  const [loadDeck, setLoadDeck] = useState([{}]);// local state for deck
  const [loadDeckCards, setLoadDeckCards] = useState([]); // local state for deck
  const [deckOptions, setDeckOptions] = useState([]);
  const [deckID, setdeckID] = useState([]);
  // const [hideTitle, setHideTitle] = useState(false);

  return (
    <>
      <DeckFetcher setDeckData={setDeckData} setDeckOptions={setDeckOptions} />
      <DeckForm
        cards={cards}
        cardAddedToDeck={cardAddedToDeck}
        deckID={deckID}
        setdeckID={setdeckID}
        loadDeck={loadDeck}
        setLoadDeck={setLoadDeck}
        safeDeck={safeDeck}
        setDeckData={setDeckData}
        deckData={deckData}
        deck={deck}
      />
      <DeckDisplay
        deckCards={deckCards}
        cards={cards}
        cardAddedToDeck={cardAddedToDeck}
        setDeckCards={setDeckCards}
        currentlyEditingDeck={currentlyEditingDeck}
        setCurrentlyEditingDeck={setCurrentlyEditingDeck}
        loadDeckCards={loadDeckCards}
        setLoadDeckCards={setLoadDeckCards}
        setDeckData={setDeckData}
        loadDeck={loadDeck}
        setLoadDeck={setLoadDeck}
        deckID={deckID}
        setdeckID={setdeckID}
        safeDeck={safeDeck}
        setDeck={safeSetDeck}
        deckOptions={deckOptions}
        deckData={deckData}
      />
    </>
  );
};

export default Deck;
