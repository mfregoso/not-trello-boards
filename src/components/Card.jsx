import React from "react";
import "../styles/card.less";

const Card = (props) => {
    const {cardText, boardIndex, cardIndex, lastBoard, moveCard} = props;
    const canMoveBack = boardIndex !== 0;
    const canMoveForward = !lastBoard;
    const moveCardHandler = (moveForward, isAllowed) => {
        if (isAllowed) moveCard(boardIndex, cardIndex, moveForward);
    };

    return (
        <div key={cardIndex} className="card">
            <div
                className={`move-card-arrow ${canMoveBack}`}
                onClick={() => moveCardHandler(false, canMoveBack)}
            >
                {canMoveBack ? "<" : ""}
            </div>
            <div className="card-text">
                {cardText}
            </div>
            <div
                className={`move-card-arrow ${canMoveForward}`}
                onClick={() => moveCardHandler(true, canMoveForward)}
            >
                {canMoveForward ? ">" : ""}
            </div>
        </div>
    )
}

export default Card;