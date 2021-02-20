import { connect } from "react-redux";
import { actionCreators } from "../store";
import React from "react";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
