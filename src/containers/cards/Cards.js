import {useState} from 'react';
import './cards.css';
import placeholderImage from '../../assets/placeholder.png';
import {GridItem} from '@chakra-ui/react';
import CardModal from '../../components/modals/CardModal';

const Cards = ({
  cardInfo,
  loadedCardInfo, // new prop here
  cardAddedToDeck,
  setCardAddedToDeck,
  setDeckCards,
  safeDeck,
  deckCards,
  setCurrentlyEditingDeck,
  currentlyEditingDeck,
  cards,
  loadDeck,
  setLoadDeck,
  loadedCards,
  deckData,
  loadDeckCards,
  deck,
  setDeck,
}) => {
  const [isHovering, setHovering] = useState(false);
  const [open, setOpen] = useState(false);
  console.log('cardInfo', cardInfo);
  console.log('deckData', deckData);
  console.log('deckCards', deckCards);
  console.log('cardAddedToDeck', cardAddedToDeck);
  console.log('loadedCardInfo', loadedCardInfo);
  console.log('loadDeck', loadDeck);
  console.log('loadedCards', loadedCards);
  console.log('deck', deck);
  console.log('cards', cards);

  // // For cardInfo
  // const imgUrl = cardInfo.map((card) =>
  //   card.card_images && card.card_images[0] ? card.card_images[0].image_url_small : '',
  // );

  // // For loadedCardInfo
  // const loadedImgUrl = loadedCardInfo.map((card) =>
  //   card.card_images && card.card_images[0] ? card.card_images[0].image_url_small : '',
  // );
  const imgUrl = cardInfo?.card_images[0]?.image_url_small || '';

  const loadedImgUrl = loadDeckCards?.card_images?.image_url_small || '';

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (event) => {
    setHovering(false); // disables tooltip
    handleClickOpen();
  };


  const tooltipDisplay = (cardData) => (
    <div className={`tooltip ${isHovering && !open ? 'show' : ''}`}>
      {cardInfo?.name && (
        <span>
          Name: {cardInfo.name}
          <br />
        </span>
      )}
      {cardInfo?.level && (
        <span>
          LV: {cardInfo.level}
          <br />
        </span>
      )}
      {cardInfo?.type && (
        <span>
          Type: {cardInfo.type}
          <br />
        </span>
      )}
      {cardInfo?.race && (
        <span>
          Race: {cardInfo.race}
          <br />
        </span>
      )}
      {cardInfo?.attribute && (
        <span>
          Attribute: {cardInfo.attribute}
          <br />
        </span>
      )}
      {cardInfo?.atk && (
        <span>
          ATK: {cardInfo.atk}
          <br />
        </span>
      )}
      {cardInfo?.def && (
        <span>
          DEF: {cardInfo.def}
          <br />
        </span>
      )}
      {cardInfo?.desc && (
        <span>
          Description: {cardInfo.desc}
          <br />
        </span>
      )}
    </div>
  );

  const dialogDisplay = (cardData) => (
    <CardModal
      isOpen={open}
      onClose={handleClose}
      cardInfo={cardInfo}
      safeDeck={safeDeck}
      loadDeck={loadDeck}
      setDeckCards={setDeckCards}
      setCurrentlyEditingDeck={setCurrentlyEditingDeck}
      currentlyEditingDeck={currentlyEditingDeck}
      setLoadDeck={setLoadDeck}
      loadedCards={loadedCards}
      cards={cards}
      loadedCardInfo={loadedCardInfo}
      cardAddedToDeck={cardAddedToDeck}
      setCardAddedToDeck={setCardAddedToDeck}
      deck={deck}
      setDeck={setDeck}
    />
  );

  return (
    <GridItem>
      {cardInfo && (
        <div
          className="card"
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
        >
          <img
            src={imgUrl || placeholderImage}
            width="90px"
            height="120px"
            alt="Card"
            onClick={handleClick}
          />
          {tooltipDisplay(cardInfo)}
          {dialogDisplay(cardInfo)}
        </div>
      )}
      {loadedCardInfo && (
        <div
          className="card"
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}
        >
          <img
            src={loadedImgUrl || placeholderImage}
            width="90px"
            height="120px"
            alt="Card"
            onClick={handleClick}
          />
          {tooltipDisplay(loadedCardInfo)}
          {dialogDisplay(loadedCardInfo)}
        </div>
      )}
    </GridItem>
  );
};

export default Cards;
