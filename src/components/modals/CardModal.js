import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Button,
  theme,
} from "@chakra-ui/react";

theme.colors.gray = {
  500: "#A0AEC0", // Adjust the shade of gray as needed
};

const CardModal = ({
  isOpen,
  onClose,
  cardInfo,
  cardAddedToDeck,
  setCardAddedToDeck,
  deck,
  setDeck
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{cardInfo?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>LV: {cardInfo?.level}</Text>
          <Text>Type: {cardInfo?.type}</Text>
          <Text>Race: {cardInfo?.race}</Text>
          <Text>Attribute: {cardInfo?.attribute}</Text>
          <Text>ATK: {cardInfo?.atk}</Text>
          <Text>DEF: {cardInfo?.def}</Text>
          <Text>Description: {cardInfo?.desc}</Text>
          <Button colorScheme="green" onClick={determineCardForAdd}>
            Add to Deck
          </Button>
          <Button colorScheme="red" onClick={determineCardForRemove}>
            Remove
          </Button>

          {cardInfo?.card_images[0]?.image_url_small && (
            <img src={cardInfo.card_images[0].image_url_small} alt="Card" />
          )}
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
