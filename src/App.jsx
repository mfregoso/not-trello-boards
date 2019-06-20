import React from "react";
import {connect} from "react-redux";
import {ADD_CARD, CHANGE_BOARD_TITLE, MOVE_CARD, ADD_BOARD} from "./store/action_types";
import Board from "./components/Board";
import "./styles/app.less";

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.reduxState !== this.props.reduxState) this.saveBoards();
  }

  saveBoards = () => {
    const data = JSON.stringify(this.props.reduxState);
    localStorage.setItem("boards", data);
  }

  addBoard = () => {
    const newTitle = window.prompt("Enter title of new board");
    if (newTitle) this.props.addBoard(newTitle);
  }

  render() {
    const {boards} = this.props.reduxState || {};
    const {addCard, changeBoardTitle, moveCard} = this.props;

    return (
      <React.Fragment>
        <div className="header">
          <button
            className="add-board-btn"
            onClick={this.addBoard}
          >
            Add Board
          </button>
        </div>
        <div className="boards-box">
          {(boards || []).map((board, idx) => {
            return (
              <Board
                board={board}
                boardIndex={idx}
                lastBoard={idx === boards.length - 1}
                addCard={addCard}
                changeBoardTitle={changeBoardTitle}
                moveCard={moveCard}
                key={idx}
              />
            )
          })}
        </div>
      </React.Fragment>
    )
  }
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (boardIndex, cardText) => dispatch({type: ADD_CARD, payload: ({boardIndex, cardText})}),
    changeBoardTitle: (boardIndex, newTitle) => dispatch({type: CHANGE_BOARD_TITLE, payload: ({boardIndex, newTitle})}),
    moveCard: (boardIndex, cardIndex, moveForward) => dispatch({type: MOVE_CARD, payload: ({boardIndex, cardIndex, moveForward})}),
    addBoard: (newTitle) => dispatch({type: ADD_BOARD, payload: newTitle}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
