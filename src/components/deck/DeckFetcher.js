// import { useEffect } from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import config from '../../config';
const apiUrl = config.apiUrl;
const DeckFetcher = ({setDeckData, deckData, setDeckOptions}) => {
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/decks`, {
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
