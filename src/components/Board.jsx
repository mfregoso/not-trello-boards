import React from "react";
import Card from "./Card";
import "../styles/board.less"

const Board = (props) => {
  const { boardIndex, lastBoard, board, addCard, changeBoardTitle, moveCard } = props;
  const { title, cards } = board;
  const newCardPrompt = () => {
    const cardText = window.prompt("Enter text to add a card");
    if (cardText) addCard(boardIndex, cardText);
  }

  const boardNamePrompt = () => {
    const newTitle = window.prompt("Enter new board title");
    if (newTitle && newTitle !== title) changeBoardTitle(boardIndex, newTitle);
  }

  return (
    <div className="board">
      <div
        className={`board-header board-${(boardIndex + 4) % 4}`}
        onClick={boardNamePrompt}
      >
        {title || "Unnamed"}
      </div>
      <div className="cards-list">
        {(cards || []).map((cardText, idx) => {
          return (
            <Card
              key={idx}
              cardText={cardText}
              boardIndex={boardIndex}
              cardIndex={idx}
              moveCard={moveCard}
              lastBoard={lastBoard}
            />
          )
        })}
      </div>
      <div onClick={newCardPrompt} className="add-card-btn">
        Add Card
            </div>
    </div>
  )
}

export default Board;
