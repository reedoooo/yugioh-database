import React, { useEffect, useState } from "react";
import { Button, Box, Heading, Grid, VStack, Icon } from "@chakra-ui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri"; // Example icon, replace with your desired deck icon
import axios from "axios";
import Cards from "../cards/Cards";
import { set } from "lodash";

const Deck = ({ deck, setDeck }) => {
   // Safe access using optional chaining and nullish coalescing operator
   const safeDeck = deck ?? [];
   const safeSetDeck = setDeck ?? (() => {});
 
   const [saveDeck, setSaveDeck] = useState([]);
   const [updateDeck, setUpdateDeck] = useState([]);
   const [deckOptions, setDeckOptions] = useState([]);
   const [hideTitle, setHideTitle] = useState(false);
 
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [author, setAuthor] = useState("");
 
   useEffect(() => {
     // Fetch the deck from the server
     const fetchDeck = async () => {
       try {
         const response = await axios.get("http://localhost:3001/api/v1/decks");
         setDeck(response.data);
         setDeckOptions(response.data);
       } catch (error) {
         console.error(error);
       }
     };
 
     fetchDeck();
   }, [setDeck]);
 
   const handleSaveDeck = async () => {
    try {
      const newDeck = {
        name: name,
        description: description,
        author: author,
        cards: safeDeck, // Assuming safeDeck is an array of cardInfo objects
      };
      const response = await axios.post(
        "http://localhost:3001/api/v1/decks",
        newDeck
      );
      console.log("Deck saved:", response.data);
      setSaveDeck(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
 
  const handleUpdateDeck = async () => {
    try {
      const updatedDeck = {
        ...updateDeck,
        cards: safeDeck, // Assuming safeDeck is an array of cardInfo objects
      };
      const response = await axios.put(
        "http://localhost:3001/api/v1/decks/:id",
        updatedDeck
      );
      console.log("Deck updated:", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
 
   const handleDeleteDeck = async (id) => {
     try {
       const response = await axios.delete(
         `http://localhost:3001/api/v1/decks/${id}`
       );
       console.log("Deck deleted:", response.data);
     } catch (error) {
       console.error(error);
     }
   };
 
   const handleLoadDeck = () => {
     setHideTitle(true);
   };
 

  if (safeDeck.length === 0) {
    return (
      <Box
        w="100%"
        h="100vh"
        bg="gray.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="deck-container"
        // hidden={hideTitle === false}
        visibility={hideTitle === false ? "visible" : "hidden"}
      >
        <Box bg="white" p={5} borderRadius="lg" boxShadow="md" flexGrow={1}>
          <Heading as="h1" size="lg" textAlign="center">
            <Button onClick={handleLoadDeck}>
              <Icon as={RiCheckboxBlankCircleLine} boxSize={6} color="white" />
              Deck
            </Button>{" "}
          </Heading>
        </Box>
      </Box>
    );
  }

  return (
    <Box w="100%" h="100vh" bg="gray.100" display="flex" className="deck">
      {/* Deck Options Column */}
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
        {deckOptions.map((deckOption) => (
          <Icon
            as={RiCheckboxBlankCircleLine} // Replace with your desired deck icon component
            key={deckOption.id}
            boxSize={6}
            color="white"
            cursor="pointer"
            mb={2}
          />
        ))}
      </Box>

      {/* Main Deck Display */}
      <Box
        bg="white"
        p={5}
        borderRadius="lg"
        boxShadow="lg"
        flexGrow={1}
        width="calc(100% - 200px)"
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

      {/* Action Buttons */}
      <VStack spacing={4} mt={5}>
        {/* Deck form */}
        <input
          type="text"
          placeholder="Deck Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button colorScheme="green" onClick={handleSaveDeck}>
          Save Deck
        </Button>
        <Button colorScheme="blue" onClick={handleUpdateDeck}>
          Update Deck
        </Button>
        <Button colorScheme="red" onClick={() => handleDeleteDeck(deck.id)}>
          Delete Deck
        </Button>
      </VStack>
    </Box>
  );
};

export default Deck;
