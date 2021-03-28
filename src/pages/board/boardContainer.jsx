import React, {useEffect} from 'react';
import { withRouter } from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import Board from "./board";
import {SetBoard, setSettings} from "../../redux/boardReducer";
import {useHistory} from "react-router-dom";

let BoardContainer = (props) => {

  const history = useHistory();

  useEffect(() => {
    props.SetBoard(props.match.params.name)
    console.log("1")
  }, [props.match.params.name])

  let onSubmit = (value) => {
    props.setSettings(value, props.board.name)
    history.push('/board/' + value.name)
  }

  return(
    <Board board={props.board} names={props.names} onSubmit={onSubmit} />
    )
}

let mapStateToProps = (state) => {

  return {
    board: state.Board.board,
    names: state.Board.PresentBoards.boards
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {SetBoard, setSettings})
)(BoardContainer)