import React from 'react';
import {connect} from "react-redux";
import CreateBoard from "./createBoard";
import {createBoard} from "../../redux/boardReducer";

let CreateBoardContainer = (props) => {

  let submit = (data) => {

    let dataBoard = {...data}

    if (dataBoard.color === null) {
      dataBoard.color = "white"
    }
    props.createBoard(dataBoard)
  }

  return (
    <CreateBoard props={props} submit={submit} />
  );
};

let mapStateToProps = (state) =>{
  return {

  }
};

export default connect(mapStateToProps, { createBoard })(CreateBoardContainer);