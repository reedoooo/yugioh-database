import React from "react";
import Cards from "../../containers/cards/Cards";
import { Button, Box, Heading, Grid, VStack } from "@chakra-ui/react";

const Deck = ({ deck, setDeck }) => {
  // Safe access using optional chaining and nullish coalescing operator
  const safeDeck = deck ?? [];
  const safeSetDeck = setDeck ?? (() => {});

  if (safeDeck.length === 0) {
    return (
      <Box
        w="100%"
        h="100vh"
        bg="gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            Deck
          </Heading>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      w="100%"
      h="100vh"
      bg="gray.100"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      id="deck"
    >
      <Box
        bg="white"
        p={5}
        borderRadius="lg"
        boxShadow="lg"
        flexGrow={1}
        width="80%"
        maxWidth="1200px"
      >
        <Grid templateColumns="repeat(auto-fill, minmax(100px, 1fr))" gap={6}>
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
        </Grid>
      </Box>
      <VStack spacing={4} mt={5}>
        <Button colorScheme="green">Save Deck</Button>
      </VStack>
    </Box>
  );
};

export default Deck;
