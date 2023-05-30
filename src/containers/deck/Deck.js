import {useState} from 'react';
import DeckFetcher from '../../components/deck/DeckFetcher';
import DeckForm from '../../components/deck/DeckForm';
import DeckDisplay from '../../components/deck/DeckDisplay';

const Deck = ({deck, setDeck}) => {
  const safeDeck = deck ?? [];
  const safeSetDeck = setDeck ?? (() => {});

  const [deckData, setDeckData] = useState([]);
  const [deckOptions, setDeckOptions] = useState([]);
  // const [hideTitle, setHideTitle] = useState(false);

  return (
    <>
      <DeckFetcher setDeckData={setDeckData} setDeckOptions={setDeckOptions} />
      <DeckForm
        safeDeck={safeDeck}
        setDeckData={setDeckData}
        deckData={deckData}
        deck={deck}
      />
      <DeckDisplay
        safeDeck={safeDeck}
        setDeck={safeSetDeck}
        deckOptions={deckOptions}
        deckData={deckData}
      />
    </>
  );
};

export default Deck;
