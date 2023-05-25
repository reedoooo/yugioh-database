import React from 'react';
import shortid from 'shortid';
import Card from '../Card';
import {useDispatch, useSelector} from 'react-redux';
import './deck.css';

const Deck = () => {
    const dispatch = useDispatch();
    let main_deck = useSelector(state => state.deck.main);
    let extra_deck = useSelector(state => state.deck.extra);

    return (
        <div className="deck-container">
            <div className="deck">
                <div>
                    {main_deck.map( (card, index) => 
                        <Card cardInfo={card} key={shortid.generate()} index={index}/>
                    )}
                </div>
                <div>
                    {extra_deck.map( (card, index) => 
                        <Card cardInfo={card} key={shortid.generate()} index={index}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Deck;
