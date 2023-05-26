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

const CardModal = ({ isOpen, onClose, cardInfo, cardAddedToDeck, setCardAddedToDeck }) => {
  const [deck, setDeck] = useState([])
  // const [removeFromDeck, setRemoveFromDeck] = useState([])
  const determineCardForAdd = () => {
    if (cardAddedToDeck === false) {
      setDeck([...deck, cardInfo])
      setCardAddedToDeck(true)
    } else if (cardAddedToDeck === true && deck.length[cardInfo.index] <= 3) {
      setDeck([...deck, cardInfo])
      setCardAddedToDeck(true)
    } else if (cardAddedToDeck === true && deck.length[cardInfo.index] > 3) {
      console.log("You can't add more than 3 of the same card to your deck")
      setCardAddedToDeck(false)
    }
  }

  const determineCardForRemove = () => {
    if (cardAddedToDeck === true) {
      setDeck([...deck - deck[cardInfo.index]])
      setCardAddedToDeck(false)
    } else if (cardAddedToDeck === false) {
      console.log("You can't remove a card that isn't in your deck")
      setCardAddedToDeck(true)
    }
  }

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
          <Button colorScheme="green" onClick={determineCardForAdd()}>Add to Deck</Button>

          <Button colorScheme="red" onClick={determineCardForRemove}>Remove</Button>
          {cardInfo?.card_images[0]?.image_url_small && (
            <img src={cardInfo.card_images[0].image_url_small} alt="Card" />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;

// // Modal.js
// import React from "react";

// const CardModal = ({ isOpen, onClose, cardInfo }) => {

//   return (
//     <div className={`modal ${isOpen ? "show" : ""}`} onClick={onClose}>
//       <div className="card-modal">
//         {cardInfo?.card_images[0]?.image_url_small && (
//           <img src={cardInfo.card_images[0].image_url_small} alt="Card" />
//         )}
//         <div>
//               {cardInfo?.name && (
//                 <h6>
//                   {cardInfo.name}
//                   <br />
//                 </h6>
//               )}
//               {cardInfo?.level && (
//                 <span>
//                   LV: {cardInfo.level}
//                   <br />
//                 </span>
//               )}
//               {cardInfo?.type && (
//                 <span>
//                   Type: {cardInfo.type}
//                   <br />
//                 </span>
//               )}
//               {cardInfo?.race && (
//                 <span>
//                   Race: {cardInfo.race}
//                   <br />
//                 </span>
//               )}
//               {cardInfo?.attribute && (
//                 <span>
//                   Attribute: {cardInfo.attribute}
//                   <br />
//                 </span>
//               )}
//               {cardInfo?.atk && (
//                 <span>
//                   ATK: {cardInfo.atk}
//                   <br />
//                 </span>
//               )}
//               {cardInfo?.def && (
//                 <span>
//                   DEF: {cardInfo.def}
//                   <br />
//                 </span>
//               )}
//               {cardInfo?.desc && (
//                 <span>
//                   Description: {cardInfo.desc}
//                   <br />
//                 </span>
//               )}
//             </div>
//       </div>
//     </div>
//   );
// };

// export default CardModal;
