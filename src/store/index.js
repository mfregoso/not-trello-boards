import {createStore} from "redux";
import {CHANGE_BOARD_TITLE, ADD_CARD, MOVE_CARD} from "./action_types";
import * as Actions from "../actions";
import {defaultCards} from "./static";

const savedState = JSON.parse(localStorage.getItem("boards"));

const storeReducer = (state = savedState || defaultCards, action) => {
  switch(action.type) {
    case ADD_CARD:
      return Actions.addCard(state, action.payload)
    case CHANGE_BOARD_TITLE:
      return Actions.changeTitle(state, action.payload);
    case MOVE_CARD:
      return Actions.moveCard(state, action.payload);
    default: 
      return state;
  }
};

export default createStore(storeReducer);