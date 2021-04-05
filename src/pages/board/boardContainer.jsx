import React, {useEffect} from 'react';
import { withRouter } from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import Board from "./board";
import {SetBoard, setDescription, setSettings} from "../../redux/boardReducer";
import {useHistory} from "react-router-dom";

let BoardContainer = (props) => {

  const history = useHistory();

  useEffect(() => {
    props.SetBoard(props.match.params.name)
  }, [props.match.params.name])

  let onSubmitSettings = (value) => {
    props.setSettings(value, props.board.name)
    history.push('/board/' + value.name)
  }

  let onSubmitDescription = (text, index, column) => {
    props.setDescription(props.board, column, index, text)
  }

  return(
    <Board board={props.board} names={props.names} onSubmitDescription={onSubmitDescription} onSubmitSettings={onSubmitSettings} />
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
  connect(mapStateToProps, {SetBoard, setSettings, setDescription})
)(BoardContainer)