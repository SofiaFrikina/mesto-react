import React from 'react';
function Card({ card, onCardClick }) {
    const handleClick = () => {
        onCardClick(card);
    }
    return (
        <div className="element">
            <img className="element__image" src={card.link} alt={`${card.name}`} onClick={handleClick} />
            <div className="element__group">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__likes">
                    <button type="button" className="element__button" aria-label="Поставить лайк"></button>
                    <span className="element__count">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" className="element__button-close" aria-label="Удалить картинку"></button>
        </div>
    )
}

export default Card;

