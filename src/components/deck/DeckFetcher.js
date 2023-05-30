// import { useEffect } from 'react';
import axios from 'axios';
import {useEffect} from 'react';

const DeckFetcher = ({setDeckData, setDeckOptions}) => {
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/decks', {
          //   params: {
          //     include: "cards",
          //   },
        });

        const deckResponse = response.data;
        console.log('deckResponse', deckResponse);
        const data = deckResponse.map((deck) => ({
          ...deck,
        }));

        setDeckData(data);
        setDeckOptions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeck();
  }, [setDeckData, setDeckOptions]);

  return null;
};

export default DeckFetcher;
