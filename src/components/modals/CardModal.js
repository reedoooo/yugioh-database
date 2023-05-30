import React from 'react';
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
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import {
  FaLevelUpAlt,
  FaShieldAlt,
  FaRegCopy,
  FaVenusMars,
  FaDragon,
  FaRegLightbulb,
} from 'react-icons/fa';

const CardModal = ({
  isOpen,
  onClose,
  cardInfo,
  safeDeck,
  loadedCardInfo,
  cardAddedToDeck,
  setCardAddedToDeck,
  cards,
  loadedCards,
  deck,
  // newDeck, // added
  setDeck, // added
  loadDeck, // added
  setLoadDeck, // added
  setCurrentlyEditingDeck,
  currentlyEditingDeck,
}) => {
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const cancelRef = React.useRef();
  console.log('cardInfo', cardInfo);
  console.log('loadedCardInfo', loadedCardInfo);
  console.log('deck', deck);
  console.log('cards', cards);
  console.log('loadedCards', loadedCards);
  console.log('loadDeck', loadDeck);
  const onAddClick = (info) => {
    if (!currentlyEditingDeck) {
      setIsAlertOpen(true);
      // setCurrentlyEditingDeck(true);
    } else {
      determineCardForAdd(info);
    }
  };


  const handleAlertClose = () => setIsAlertOpen(false);

  const handleConfirmNewDeck = (info) => {
    setCurrentlyEditingDeck(false);
    determineCardForAdd(info);
    handleAlertClose();
  };
  console.log('currentlyEditingDeck', currentlyEditingDeck);
  // const determineDeckToAddTo = (info) => {
  //   if (currentlyEditingDeck === false) {
  //     determineCardForAdd(info);
  //   }
  const determineCardForAdd = (info) => {
    // choose the right deck
    const currentDeck = info === cardInfo ? cards : loadedCards;

    const cardCount = currentDeck.filter((card) => card?.id === info?.id).length;

    if (cardCount < 3) {
      console.log('info', info);

      if (info === cardInfo) {
        const newDeck = [...deck, cardInfo];
        setDeck(newDeck);
        console.log('deck', newDeck);
        setCardAddedToDeck({
          cardAdded: info?.id,
        });
      }

      if (info === loadedCardInfo) {
        const newLoadedDeck = [...loadDeck, loadedCardInfo];
        setLoadDeck(newLoadedDeck);
        console.log('loadDeck', newLoadedDeck);
        setCardAddedToDeck({
          cardAdded: info?.id,
        });
      }
    } else {
      console.log('You can\'t add more than 3 of the same card to your deck');
    }
  };


  const determineCardForRemove = (info, currentlyEditingDeck) => {
    const deck = currentlyEditingDeck ? loadDeck : cardInfo;
    // const setDeck = currentlyEditingDeck ? setLoadDeck : setDeck;

    const updatedDeck = deck.filter((card) => card?.id !== info?.id);
    if (updatedDeck.length !== deck.length) {
      setDeck(updatedDeck);
    } else {
      console.log('You can\'t remove a card that isn\'t in your deck');
    }
  };

  // Determine which cardInfo to use
  const info = currentlyEditingDeck ? loadedCardInfo : cardInfo;
  const src = info === cardInfo ? cardInfo?.card_images[0]?.image_url : loadedCardInfo?.card_images?.image_url;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <React.Fragment key={info?.id}>
          <ModalHeader>{info?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Stack spacing={3}>
                <Image
                  src={src}
                  alt="Card"
                  boxSize="300px"
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/300"
                />
                {/* <Button colorScheme="green" onClick={() => determineCardForAdd(info)}>
                  Add to Deck
                </Button> */}
                <Button colorScheme="green" onClick={() => onAddClick(info, currentlyEditingDeck)}>
          Add to Deck
                </Button>

                {/* <Button colorScheme="green" onClick={() => determineCardForAdd(info, currentlyEditingDeck)}>
              Add to Deck
                </Button> */}
                <Button colorScheme="red" onClick={() => determineCardForRemove(info, currentlyEditingDeck)}>
    Remove
                </Button>
              </Stack>
              <Stack spacing={3}>
                <Flex align="center">
                  <Box as={FaLevelUpAlt} size="24px" />
                  <Heading size="md">Level: {info?.level}</Heading>
                </Flex>
                <Flex align="center">
                  <Box as={FaVenusMars} size="24px" />
                  <Heading size="md">Type: {info?.type}</Heading>
                </Flex>
                <Flex align="center">
                  <Box as={FaDragon} size="24px" />
                  <Heading size="md">Race: {info?.race}</Heading>
                </Flex>
                <Flex align="center">
                  <Box as={FaRegLightbulb} size="24px" />
                  <Heading size="md">Attribute: {info?.attribute}</Heading>
                </Flex>
                <Flex align="center">
                  <Box size="24px" />
                  <Heading size="md">ATK: {info?.atk}</Heading>
                </Flex>
                <Flex align="center">
                  <Box as={FaShieldAlt} size="24px" />
                  <Heading size="md">DEF: {info?.def}</Heading>
                </Flex>
                <Flex align="center">
                  <Box as={FaRegCopy} size="24px" />
                  <Heading size="md">Description: {info?.description}</Heading>
                </Flex>
                <Text>{cardInfo?.desc}</Text>
              </Stack>
            </Grid>
          </ModalBody>
        </React.Fragment>
      </ModalContent>
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleAlertClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Start a new deck
            </AlertDialogHeader>

            <AlertDialogBody>
              Would you like to start a new deck?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleAlertClose}>
                No
              </Button>
              <Button colorScheme="green" onClick={() => handleConfirmNewDeck(info)} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Modal>
  );
};

export default CardModal;

