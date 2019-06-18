import {createStore} from "redux";
import {UPDATE_GREETING} from "./action_types";

const initialState = {
  greeting: "Hello, World"
};

const storeReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_GREETING:
      return {...state, greeting: action.payload};
    default: 
      return state;
  }
};

export default createStore(storeReducer);