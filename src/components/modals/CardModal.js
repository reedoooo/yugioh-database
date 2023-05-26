import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
  Image,
  Stack,
  Box,
  Heading,
  Flex,
  Grid,
} from "@chakra-ui/react";
import {
  FaLevelUpAlt,
  FaShieldAlt,
  FaRegCopy,
  FaVenusMars,
  FaDragon,
  FaRegLightbulb,
} from "react-icons/fa";

// theme.colors.gray = {
//   500: "#A0AEC0", // Adjust the shade of gray as needed
// };

const CardModal = ({
  isOpen,
  onClose,
  cardInfo,
  cardAddedToDeck,
  setCardAddedToDeck,
  deck,
  setDeck,
}) => {
  // const [deck, setDeck] = useState([]);

  const determineCardForAdd = () => {
    let cardCount = deck.filter((card) => card.id === cardInfo.id).length;
    if (cardCount < 3) {
      setDeck([...deck, cardInfo]);
      setCardAddedToDeck((prevState) => ({
        ...prevState,
        [cardInfo.id]: true,
      }));
    } else {
      console.log("You can't add more than 3 of the same card to your deck");
    }
  };

  const determineCardForRemove = () => {
    let updatedDeck = deck.filter((card) => card.id !== cardInfo.id);
    if (updatedDeck.length !== deck.length) {
      setDeck(updatedDeck);
    } else {
      console.log("You can't remove a card that isn't in your deck");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{cardInfo?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Stack spacing={3}>
              <Image
                src={cardInfo?.card_images[0]?.image_url_small}
                alt="Card"
                boxSize="300px"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/300"
              />
              <Button colorScheme="green" onClick={determineCardForAdd}>
                Add to Deck
              </Button>
              <Button colorScheme="red" onClick={determineCardForRemove}>
                Remove
              </Button>
            </Stack>
            <Stack spacing={3}>
              <Flex align="center">
                <Box as={FaLevelUpAlt} size="24px" />
                <Heading size="md">Level: {cardInfo?.level}</Heading>
              </Flex>
              <Flex align="center">
                <Box as={FaVenusMars} size="24px" />
                <Heading size="md">Type: {cardInfo?.type}</Heading>
              </Flex>
              <Flex align="center">
                <Box as={FaDragon} size="24px" />
                <Heading size="md">Race: {cardInfo?.race}</Heading>
              </Flex>
              <Flex align="center">
                <Box as={FaRegLightbulb} size="24px" />
                <Heading size="md">Attribute: {cardInfo?.attribute}</Heading>
              </Flex>
              <Flex align="center">
                <Box size="24px" />
                <Heading size="md">ATK: {cardInfo?.atk}</Heading>
              </Flex>
              <Flex align="center">
                <Box as={FaShieldAlt} size="24px" />
                <Heading size="md">DEF: {cardInfo?.def}</Heading>
              </Flex>
              <Flex align="center">
                <Box as={FaRegCopy} size="24px" />
                <Heading size="md">Description:</Heading>
              </Flex>
              <Text>{cardInfo?.desc}</Text>
            </Stack>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;

// import React, { useState } from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   Text,
//   Button,
//   theme,
// } from "@chakra-ui/react";

// theme.colors.gray = {
//   500: "#A0AEC0", // Adjust the shade of gray as needed
// };

// const CardModal = ({ isOpen, onClose, cardInfo, cardAddedToDeck, setCardAddedToDeck }) => {
//   const [deck, setDeck] = useState([])
//   // const [removeFromDeck, setRemoveFromDeck] = useState([])
//   const determineCardForAdd = () => {
//     if (cardAddedToDeck === false) {
//       setDeck([...deck, cardInfo])
//       setCardAddedToDeck(true)
//     } else if (cardAddedToDeck === true && deck.length[cardInfo.index] <= 3) {
//       setDeck([...deck, cardInfo])
//       setCardAddedToDeck(true)
//     } else if (cardAddedToDeck === true && deck.length[cardInfo.index] > 3) {
//       console.log("You can't add more than 3 of the same card to your deck")
//       setCardAddedToDeck(false)
//     }
//   }

//   const determineCardForRemove = () => {
//     if (cardAddedToDeck === true) {
//       setDeck([...deck - deck[cardInfo.index]])
//       setCardAddedToDeck(false)
//     } else if (cardAddedToDeck === false) {
//       console.log("You can't remove a card that isn't in your deck")
//       setCardAddedToDeck(true)
//     }
//   }

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>{cardInfo?.name}</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Text>LV: {cardInfo?.level}</Text>
//           <Text>Type: {cardInfo?.type}</Text>
//           <Text>Race: {cardInfo?.race}</Text>
//           <Text>Attribute: {cardInfo?.attribute}</Text>
//           <Text>ATK: {cardInfo?.atk}</Text>
//           <Text>DEF: {cardInfo?.def}</Text>
//           <Text>Description: {cardInfo?.desc}</Text>
//           <Button colorScheme="green" onClick={determineCardForAdd()}>Add to Deck</Button>

//           <Button colorScheme="red" onClick={determineCardForRemove}>Remove</Button>
//           {cardInfo?.card_images[0]?.image_url_small && (
//             <img src={cardInfo.card_images[0].image_url_small} alt="Card" />
//           )}
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default CardModal;
