// Modal.js
import React from "react";

const CardModal = ({ isOpen, onClose, cardInfo }) => {


  return (
    <div className={`modal ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="card-modal">
        {cardInfo?.card_images[0]?.image_url_small && (
          <img src={cardInfo.card_images[0].image_url_small} alt="Card" />
        )}
        <div>
              {cardInfo?.name && (
                <h6>
                  {cardInfo.name}
                  <br />
                </h6>
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
      </div>
    </div>
  );
};

export default CardModal;
