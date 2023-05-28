import React, { useEffect, useState } from "react";
import { Button, Box, Heading, Grid, VStack, Icon } from "@chakra-ui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import axios from "axios";
import Cards from "../cards/Cards";

const Deck = ({ deck, setDeck }) => {
  const safeDeck = deck ?? [];
  const safeSetDeck = setDeck ?? (() => {});

  const [deckData, setDeckData] = useState([]); // new state for fetched deck data
  const [deckOptions, setDeckOptions] = useState([]);
  const [hideTitle, setHideTitle] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [nameError, setNameError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [deckNameToDelete, setDeckNameToDelete] = useState("");

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const responses = await Promise.all([
          axios.get("http://localhost:3001/api/v1/decks"),
            // axios.get("http://localhost:3001/api/v1/cards"),
        ]);

        const deckResponse = responses[0];
        // const cardResponse = responses[1];
        console.log("responses", responses);
        // console.log("deckResponse", deckResponse);
        // console.log('cardResponse', cardResponse);
        console.log("deckResponse", deckResponse.data);

        const data = deckResponse.data.map((deck) => ({
          ...deck,
          //   card: deck.cards.map((card) => ({
          //     ...card,
          //     card_images: JSON.parse(card.card_images),
          //   })),
        }));
        console.log("data", data);
        setDeckData(data);
        setDeckOptions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDeck();
  }, []);

  const handleSaveDeck = async () => {
    console.log("handleSaveDeck", name, author, safeDeck);
    if (!name || !author) {
      console.error("Name and author fields are required");
      return;
    }
  
    try {
      // Clear the form fields
      setName("");
      setDescription("");
      setAuthor("");
  
      const newDeck = {
        name: name,
        description: description,
        author: author,
        cards: safeDeck.map((card) => ({
          id: card.id,
          archetype: card.archetype,
          atk: card.atk,
          def: card.def,
          level: card.level,
          attribute: card.attribute,
          name: card.name,
          card_images: card.card_images,
          type: card.type,
          frameType: card.frameType,
          desc: card.desc,
          race: card.race,
        })),
      };
      console.log("newDeck", newDeck);
      const response = await axios.post(
        "http://localhost:3001/api/v1/decks",
        newDeck
      );
  
      setDeckData([...deckData, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleUpdateDeck = async (deckId) => {
    console.log("handleUpdateDeck", deckId);
    // pass deckId as an argument
    try {
      const updatedDeck = {
        cards: safeDeck,
      };
      const response = await axios.put(
        `http://localhost:3001/api/v1/decks/${deckId}`, // replace `:id` with `deckId`
        updatedDeck
      );
      setDeckData(
        deckData.map((deck) => (deck.id === deckId ? response.data : deck))
      );
    } catch (error) {
      console.error(error);
    }
  };

  //   const handleDeleteDeck = async (deckId) => {
  //     try {
  //       await axios.delete(`http://localhost:3001/api/v1/decks/${deckId}`);
  //       setDeckData(deckData.filter((deck) => deck.id !== deckId));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  const handleDeleteDeckByName = async (deckName) => {
    // Find the deck with the given name
    const deckToDelete = deckData.find((deck) => deck.name === deckName);

    // If no deck was found, log an error and exit the function
    if (!deckToDelete) {
      console.error(`No deck found with name: ${deckName}`);
      return;
    }

    // Use the ID of the deck to delete it
    try {
      await axios.delete(
        `http://localhost:3001/api/v1/decks/${deckToDelete.id}`
      );
      setDeckData(deckData.filter((deck) => deck.id !== deckToDelete.id));
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
            {/* <Box
            bg="rgba(0, 0, 0, 0.2)"
            p={2}
            width="200px"
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            zIndex={999}
          > */}
            {/* {deckOptions.map((deckOption) => (
              <Box>
                <Icon
                  as={RiCheckboxBlankCircleLine} // Replace with your desired deck icon component
                  key={deckOption.id}
                  boxSize={6}
                  color="white"
                  cursor="pointer"
                  mb={2}
                />
              </Box>
            ))} */}
            {/* </Box> */}
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

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Deck Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            // Clear the name error when the input changes
            setNameError("");
          }}
        />
        {nameError && <div style={{ color: "red" }}>{nameError}</div>}

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
            // Clear the author error when the input changes
            setAuthorError("");
          }}
        />
        {authorError && <div style={{ color: "red" }}>{authorError}</div>}

        <Button colorScheme="green" onClick={handleSaveDeck}>
          Save Deck
        </Button>
        <Button colorScheme="blue" onClick={() => handleUpdateDeck(deck.id)}>
          {" "}
          {/* pass deck id */}
          Update Deck
        </Button>
        <input
          type="text"
          placeholder="Deck Name to Delete"
          value={deckNameToDelete}
          onChange={(e) => setDeckNameToDelete(e.target.value)}
        />

        <Button
          colorScheme="red"
          onClick={() => handleDeleteDeckByName(deckNameToDelete)}
        >
          Delete Deck by Name
        </Button>
        {/* <Button colorScheme="red" onClick={() => handleDeleteDeck(deck.id)}>
          Delete Deck
        </Button> */}
      </VStack>
    </Box>
  );
};

export default Deck;
