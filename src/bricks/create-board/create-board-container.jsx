import React from 'react';
import {connect} from "react-redux";
import CreateBoard from "./create-board";

let CreateBoardContainer = (props) => {

  let submit = (props) => {
    debugger
  }

  return (
    <CreateBoard props={props} submit={submit} />
  );
};

let mapStateToProps = (state) =>{
  return {

  }
};

export default connect(mapStateToProps, {})(CreateBoardContainer);