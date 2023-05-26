import React, { useState } from "react";
import { Grid, Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Search from "../../containers/search/Search";
// import Login from "../../containers/login/Login";
import Navbar from "../../containers/navbar/Navbar";
// import LoginModal from "../../components/modals/LoginModal";
import Deck from "../../containers/deck/Deck";

const theme = extendTheme({
  colors: {
    gray: {
      500: "#A0AEC0", // Adjust the shade of gray as needed
    },
  },
});

function Home() {
  const [cards, setCards] = useState([]); // local state for cards
  const [cardAddedToDeck, setCardAddedToDeck] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Grid h="100vh" templateRows="1fr 9fr" templateColumns="1fr 1fr 1fr 1fr">
        {/* <Box>
          <LoginModal />
        </Box> */}
        <Box gridColumn="1 / -1" bg="gray.500">
          <Navbar />
        </Box>
        <Box gridRow="2" gridColumn="1" bg="gray.400" overflowY="auto">
          <Search cards={cards} setCards={setCards} cardAddedToDeck={cardAddedToDeck} setCardAddedToDeck={setCardAddedToDeck} />
        </Box>
        <Box
          gridRow="2"
          gridColumn="1"
          gridColumnStart={2}
          gridColumnEnd={5}
          bg="gray.600"
        >
          <Deck cardInfo={cards} setCards={setCards} cardAddedToDeck={cardAddedToDeck} setCardAddedToDeck={setCardAddedToDeck} />
        </Box>
      </Grid>
    </ChakraProvider>
  );
}

export default Home;
