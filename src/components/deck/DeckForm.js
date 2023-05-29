import { useState } from "react";
import axios from "axios";
// import Button from Chakra UI
import {
    // remove Button from here
    Button,
    
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormErrorMessage,
    Spinner,
    Box,
    useDisclosure,
  } from "@chakra-ui/react";
  // ...
import DOMPurify from "dompurify";
import { AnimatePresence, motion } from "framer-motion";

const MotionBox = motion(Box);
// Framer motion variants for button
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

// Replace the Chakra UI Button with a motion component
const DeckForm = ({ safeDeck, setDeckData, deckData, deck }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  // const [userID, setUserID] = useState("");
  const [nameError, setNameError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [deckNameToDelete, setDeckNameToDelete] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSaveDeck = async () => {
    console.log("handleSaveDeck", name, author, safeDeck);
    if (!name || !author) {
      console.error("Name and author fields are required");
      return;
    }

    try {
      const sanitizedDescription = DOMPurify.sanitize(description);

      const newDeck = {
        name: name,
        description: sanitizedDescription,
        author: author,
        // userID: userID,
        cards: safeDeck.map((card) => ({
          id: card.id,
          name: card.name,
          type: card.type || null,
          frameType: card.frameType || null,
          description: card.description || null,
          card_images: card.card_images || null,
          archetype: card.archetype || null,
          atk: card.atk || null,
          def: card.def || null,
          level: card.level || null,
          attribute: card.attribute || null,
          race: card.race || null,
        })),
      };

      const response = await axios.post(
        "http://localhost:3001/api/v1/decks",
        newDeck
      );
      console.log("handleSaveDeck", response.data);
      setDeckData([...deckData, response.data]);
      setName("");
      setDescription("");
      setAuthor("");
      setNameError("");
      setAuthorError("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateDeck = async (deckId) => {
    console.log("handleUpdateDeck", deckId);
    try {
      const updatedDeck = {
        cards: safeDeck.map((card) => card.name),
      };
      const response = await axios.put(
        `http://localhost:3001/api/v1/decks/${deckId}`,
        updatedDeck
      );

      console.log("handleUpdateDeck", deckId);
      setDeckData(
        deckData.map((deck) => (deck.id === deckId ? response.data : deck))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteDeckByName = async (deckName) => {
    const deckToDelete = deckData.find((deck) => deck.name === deckName);
    if (!deckToDelete) {
      console.error(`No deck found with name: ${deckName}`);
      return;
    }

    try {
      setIsLoading(true);
      await axios.delete(
        `http://localhost:3001/api/v1/decks/${deckToDelete.id}`
      );
      setDeckData(deckData.filter((deck) => deck.id !== deckToDelete.id));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5em 1em",
    fontSize: "1em",
    borderRadius: "4px",
    cursor: "pointer",
    // more styles...
  };
  const formAnimation = {
    hidden: { width: "100px", x: 50 },
    visible: {
      width: "500px",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    exit: { width: "100px", x: 50 },
  };

  // create motion buttons
  const SaveDeckButton = motion.button;
  const UpdateDeckButton = motion.button;
  const DeleteDeckButton = motion.button;

  return (
    <Box position="absolute" right="0" pr={5}>
      <Button onClick={isOpen ? onClose : onOpen} h={50} w={200}>
        {isOpen ? "Close Form" : "Open Form"}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formAnimation}
          >
            <VStack spacing={4} mt={5}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>

              <FormControl isInvalid={!!nameError}>
                <FormLabel>Deck Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Deck Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                  }}
                />
                <FormErrorMessage>{nameError}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!authorError}>
                <FormLabel>Author</FormLabel>
                <Input
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                    setAuthorError("");
                  }}
                />
                <FormErrorMessage>{authorError}</FormErrorMessage>
              </FormControl>

              <SaveDeckButton
                onClick={handleSaveDeck}
                whileHover={buttonVariants.hover}
                style={{
                  ...buttonStyle,
                  backgroundColor: isLoading ? "lightgray" : "green",
                }}
              >
                {isLoading ? "Saving..." : "Save Deck"}
                {isLoading && <Spinner />}
              </SaveDeckButton>

              <UpdateDeckButton
                onClick={() => handleUpdateDeck(deck.id)}
                whileHover={buttonVariants.hover}
                style={{
                  ...buttonStyle,
                  backgroundColor: isLoading ? "lightgray" : "blue",
                }}
              >
                {isLoading ? "Updating..." : "Update Deck"}
                {isLoading && <Spinner />}
              </UpdateDeckButton>

              <DeleteDeckButton
              setDeckNameToDelete={setDeckNameToDelete}
                onClick={() => handleDeleteDeckByName(deckNameToDelete)}
                whileHover={buttonVariants.hover}
                style={{
                  ...buttonStyle,
                  backgroundColor: isLoading ? "lightgray" : "red",
                }}
              >
                {isLoading ? "Deleting..." : "Delete Deck by Name"}
                {isLoading && <Spinner />}
              </DeleteDeckButton>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default DeckForm;
