import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import Tooltip from "@mui/material/Tooltip";
// import Dialog from "@mui/material/Dialog";
import "./cards.css";
import placeholderImage from "../../assets/placeholder.png";
import { GridItem } from "@chakra-ui/react";
import CardModal from "../../components/modals/CardModal";

const Cards = ({
  setSearchName,
  searchName,
  work,
  cardInfo,
  cardAddedToDeck,
  setCardAddedToDeck,
  deck,
  setDeck,
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [cardAddedToDeck, setCardAddedToDeck] = useState(false);

  //   const [isHovering, setHovering] = useState(false);
  //   const [open, setOpen] = useState(false);
  //   const dispatch = useDispatch();
  //   const img_url = cardInfo.card_images.[0].image_url_small;
  const [isHovering, setHovering] = useState(false);
  const [open, setOpen] = useState(false);
  //   const dispatch = useDispatch();
  const img_url = cardInfo?.card_images[0]?.image_url_small || "";
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleClose = () => {
  //   setOpen(false);
  //   setHovering(false);
  // };
  console.log(cardInfo);

  const handleClick = (event) => {
    setHovering(false); //disables tooltip
    handleClickOpen();

    // if (event.buttons === 2) {
    //   //if right click opens modal
    //   handleClickOpen();

    //   event.preventDefault();
    //   return false;
    // }
  };

  const TooltipDisplay = (
    <div className={`tooltip ${isHovering && !open ? "show" : ""}`}>
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

  //   const DialogDisplay = (
  //     <div className={`modal ${open ? "show" : ""}`} onClick={handleClose}>
  //       <div className="card-modal">
  //         {cardInfo?.card_images[0]?.image_url_small && (
  //           <img src={cardInfo.card_images[0].image_url_small} alt="Card" />
  //         )}
  //         <div>
  //           {cardInfo?.name && (
  //             <h6>
  //               {cardInfo.name}
  //               <br />
  //             </h6>
  //           )}
  //           {cardInfo?.level && (
  //             <span>
  //               LV: {cardInfo.level}
  //               <br />
  //             </span>
  //           )}
  //           {cardInfo?.type && (
  //             <span>
  //               Type: {cardInfo.type}
  //               <br />
  //             </span>
  //           )}
  //           {cardInfo?.race && (
  //             <span>
  //               Race: {cardInfo.race}
  //               <br />
  //             </span>
  //           )}
  //           {cardInfo?.attribute && (
  //             <span>
  //               Attribute: {cardInfo.attribute}
  //               <br />
  //             </span>
  //           )}
  //           {cardInfo?.atk && (
  //             <span>
  //               ATK: {cardInfo.atk}
  //               <br />
  //             </span>
  //           )}
  //           {cardInfo?.def && (
  //             <span>
  //               DEF: {cardInfo.def}
  //               <br />
  //             </span>
  //           )}
  //           {cardInfo?.desc && (
  //             <span>
  //               Description: {cardInfo.desc}
  //               <br />
  //             </span>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   console.log(img_url);

  return (
    <GridItem>
      <div
        className="card"
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        <img
          src={img_url || placeholderImage}
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
