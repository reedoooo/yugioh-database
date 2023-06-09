import {useState} from 'react';
import './cards.css';
import placeholderImage from '../../assets/placeholder.png';
import {GridItem} from '@chakra-ui/react';
import CardModal from '../../components/modals/CardModal';

const Cards = ({
  cardInfo,
  cardAddedToDeck,
  setCardAddedToDeck,
  deck,
  setDeck,
}) => {
  const [isHovering, setHovering] = useState(false);
  const [open, setOpen] = useState(false);
  //   const dispatch = useDispatch();
  const imgUrl = cardInfo?.card_images[0]?.image_url_small || '';
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(cardInfo);

  const handleClick = (event) => {
    setHovering(false); // disables tooltip
    handleClickOpen();
  };

  const TooltipDisplay = (
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

  const DialogDisplay = (
    <CardModal
      isOpen={open}
      onClose={handleClose}
      cardInfo={cardInfo}
      cardAddedToDeck={cardAddedToDeck}
      setCardAddedToDeck={setCardAddedToDeck}
      deck={deck}
      setDeck={setDeck}
    />
  );

  return (
    <GridItem>
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
          //   onMouseDown={(e) => handleClick(e)}
          onClick={handleClick}
        />
        {TooltipDisplay}
        {DialogDisplay}
      </div>
    </GridItem>
  );
};

export default Cards;
