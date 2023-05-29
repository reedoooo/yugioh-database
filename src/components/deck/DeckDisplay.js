import { Box, Grid, Icon } from "@chakra-ui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import Cards from "../../containers/cards/Cards";

const DeckDisplay = ({ safeDeck, setDeck, deckOptions, deckData }) => {
  const handleLoadDeck = (deckId) => {
    console.log("Clicked deck ID:", deckId);
    const selectedDeck = deckData.find((deck) => deck.id === deckId);
    console.log("Selected deck:", selectedDeck);
    if (!selectedDeck) {
      console.error(`No deck found with ID: ${deckId}`);
      return;
    }
    setDeck(selectedDeck.cards);
  };

  return (
    <Box w="100%" h="100vh" bg="gray.100" display="flex" className="deck">
      <Box
        bg="white"
        p={5}
        borderRadius="lg"
        boxShadow="lg"
        flexGrow={1}
        maxWidth="calc(100vw - 200px)"
        overflowX="auto"
      >
        {safeDeck.length > 0 && (
          <Grid templateColumns="repeat(4, 1fr)" gap={3}>
            {safeDeck.map((card, index) => {
              const uniqueKey = `${card.id}_${index}`;
              return (
                <Cards
                  key={uniqueKey}
                  cardInfo={card}
                  deck={safeDeck}
                  setDeck={setDeck}
                  index={index}
                />
              );
            })}
          </Grid>
        )}
      </Box>
      <Box
        bg="rgba(0, 0, 0, 0.2)"
        p={2}
        width="200px"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {deckOptions.map((deckOption) => (
            <Icon
              as={RiCheckboxBlankCircleLine}
              key={deckOption.id}
              boxSize={6}
              color="white"
              cursor="pointer"
              onClick={() => handleLoadDeck(deckOption.id)}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeckDisplay;
