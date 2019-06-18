import React from "react";
import {connect} from "react-redux";
import {UPDATE_GREETING} from "./store/action_types";

const App = (props) => {
  return (
    <div className="text-center">
      <h1 className="title">Hello World</h1>
    </div>
  )
};

export default App;

const mapStateToProps = (state) => {
  const {greeting} = state;
  return {
    greeting,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: () => dispatch({type: UPDATE_GREETING, payload: "New Greeting!"}),
  }
};

//export default connect(mapStateToProps, mapDispatchToProps)(App);
