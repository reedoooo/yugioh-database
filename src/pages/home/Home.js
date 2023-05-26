import React, { useState } from "react";
import { Grid, Box, extendTheme } from "@chakra-ui/react";
import Search from "../../containers/search/Search";
import Navbar from "../../containers/navbar/Navbar";
import Deck from "../../containers/deck/Deck";

function Home() {
  const [cards, setCards] = useState([]); // local state for cards
  const [cardAddedToDeck, setCardAddedToDeck] = useState(null);
  const [deck, setDeck] = useState([]);

  const theme = extendTheme({
    shadows: {
      outline: "0 0 0 3px #FBD38D",
      md: "8px 0 10px -5px rgba(0, 0, 0, 0.2)",
      lg: "10px 0 15px -5px rgba(0, 0, 0, 0.2)",
      xl: "20px 0 25px -5px rgba(0, 0, 0, 0.2)",
    },
    colors: {
      gray: {
        500: "#A0AEC0", // Adjust the shade of gray as needed
      },
    },
  });
  return (
    <Grid h="100vh" templateRows="1fr 9fr" templateColumns="25px 1fr 1fr 1fr">
      <Box gridColumn="1 / -1" bg="gray.500">
        <Navbar />
      </Box>
      <Box
        gridRow="2"
        gridColumn="1 / span 2"
        bg="gray.400"
        overflowY="auto"
        shadow={theme.shadows.md}
        maxWidth="500px" // Add maxWidth property
        align="left"
        position="sticky" // Set position to sticky
        top={0} // Stick it to the top of the viewport
      >
        <Search
          cards={cards}
          setCards={setCards}
          deck={deck}
          setDeck={setDeck}
          cardAddedToDeck={cardAddedToDeck}
          setCardAddedToDeck={setCardAddedToDeck}
        />
      </Box>

      <Box gridRow="2" gridColumn="3 / -1" bg="gray.600">
        <Deck
          cardInfo={cards}
          setCards={setCards}
          cardAddedToDeck={cardAddedToDeck}
          setCardAddedToDeck={setCardAddedToDeck}
          deck={deck}
          setDeck={setDeck}
        />
      </Box>
    </Grid>
  );
}

export default Home;
