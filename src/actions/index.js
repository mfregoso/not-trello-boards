export const addCard = (state, {boardIndex, cardText}) => {
  const boards = state.boards.slice();
  const newCards = boards[boardIndex].cards.concat(cardText);
  boards[boardIndex].cards = newCards;
  return {...state, boards};
}

export const changeTitle = (state, {boardIndex, newTitle}) => {
  const boards = state.boards.slice();
  boards[boardIndex].title = newTitle;
  return {...state, boards}
};

export const moveCard = (state, {boardIndex, cardIndex, moveForward}) => {
  const boards = state.boards.slice();
  const card = boards[boardIndex].cards.splice(cardIndex, 1);
  const newBoardIndex = boardIndex + (moveForward ? 1 : -1);
  boards[newBoardIndex].cards.splice(cardIndex, 0, card);
  return {...state, boards}
};
