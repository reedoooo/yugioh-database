import {Box, Grid, Icon} from '@chakra-ui/react';
import {RiCheckboxBlankCircleLine} from 'react-icons/ri';
import Cards from '../../containers/cards/Cards';

const DeckDisplay = ({safeDeck, cards, cardAddedToDeck, deckCards, setDeckCards, setDeck, deck, loadDeck, loadDeckCards, setLoadDeckCards, loadedCardInfo, setLoadedCardInfo, setLoadDeck, deckID, setDeckID, setDeckData, deckOptions, deckData, setCurrentlyEditingDeck, currentlyEditingDeck}) => {
  // const [loadDeckCards, setLoadDeckCards] = useState([]); // local state for deck
  // const [displayDeck, setDisplayDeck] = useState(deck); // New state variable
  console.log('1deck', deck);
  console.log('1deckCards', deckCards);
  console.log('1loadDeck', loadDeck);
  console.log('cardInfo', cards);
  console.log('cardAddedToDeck', cardAddedToDeck);
  console.log('1loadDeckCards', loadDeckCards);
  console.log('1deckID', deckID);
  console.log('1deckOptions', deckOptions);
  console.log('1deckData', deckData);
  console.log('1currentlyEditingDeck', currentlyEditingDeck);
  console.log('1safeDeck', safeDeck);
  console.log('1setDeck', setDeck);
  console.log('1setDeckCards', setDeckCards);
  console.log('1setCurrentlyEditingDeck', setCurrentlyEditingDeck);
  console.log('1loadedCardInfo', loadedCardInfo);
  // const loadNewDeck = (deckId) => {
  //   const selectedDeck = deckData.find((deck) => deck.id === deckId);
  //   console.log('Selected deck:', selectedDeck);

  //   setDeck(selectedDeck.cards); // Set the deck
  // };
  if (currentlyEditingDeck === false && Array.isArray(deck)) {
    const matchingCard = cards.find((card) => card.id === cardAddedToDeck.cardAdded);
    console.log('cardAddedToDeck.cardAdded', cardAddedToDeck.cardAdded);

    if (matchingCard) {
      const newDeck = [...deck, matchingCard];
      setDeck(newDeck);
      setDeckCards(newDeck);
    }
  }


  const handleSelectDeck = (deckId) => {
    console.log('Clicked deck ID:', deckId);
    // const selectedDeckID = deckID.find((deck) => deck.id === deckId);
    const selectedDeck = deckData.find((deck) => deck.id === deckId);
    console.log('Selected deck:', selectedDeck);
    if (!selectedDeck) {
      console.error(`No deck found with ID: ${deckId}`);
      return;
    }

    // setDeck(selectedDeck.cards); // Set the deck
    // specificDeckCards(deckOptions.id); // Set the deck ID
    // setDeckDisplay
    setLoadDeck(selectedDeck);
    console.log('DeckDisplay loadDeck:', loadDeck);
    setCurrentlyEditingDeck(true);
    setLoadDeckCards(selectedDeck.cards);
    // setDisplayDeck(selectedDeck.cards);

    // setDeckData(selectedDeck.cards); // Set the cards added to that deck
    // setDeckLoaded
  };
  // const selectedCards = loadDeckCards;

  // const theLoadedDeckCards = (selectedCards) => {
  //   console.log('Clicked deck ID:', deckId);
  //   const cardsToLoad = selectedDeck.cards;
  //   console.log('Selected deck:', cardsToLoad);
  // };

  // theLoadedDeckCards(selectedCards);
  return (
    <Box w='100%' h='100vh' bg='gray.100' display='flex' className='deck'>
      <Box
        bg='white'
        p={5}
        borderRadius='lg'
        boxShadow='lg'
        flexGrow={1}
        maxWidth='calc(100vw - 200px)'
        overflowX='auto'
      >
        {safeDeck && safeDeck.length > 0 && (
          <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            {safeDeck.map((card, index) => {
              const uniqueKey = `${card.id}_${index}`;
              return (
                <Cards
                  key={uniqueKey}
                  loadedCardInfo={loadDeckCards[index + 1]}
                  loadedCards={loadDeckCards}
                  deck={safeDeck}
                  cardInfo={card}
                  safeDeck={safeDeck}
                  loadDeck={loadDeck}
                  setLoadDeck={setLoadDeck}
                  setCurrentlyEditingDeck={setCurrentlyEditingDeck}
                  currentlyEditingDeck={currentlyEditingDeck}
                  setDeck={setDeck}
                  index={index}
                />
              );
            })}
          </Grid>
        )}

      </Box>
      <Box
        bg='rgba(0, 0, 0, 0.2)'
        p={2}
        width='200px'
        height='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
          {deckOptions.map((deckOption) => (
            <Icon
              as={RiCheckboxBlankCircleLine}
              key={deckOption.id}
              boxSize={6}
              color='white'
              cursor='pointer'
              onClick={() => handleSelectDeck(deckOption.id)}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeckDisplay;
