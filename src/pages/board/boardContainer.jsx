import React, {useEffect} from 'react';
import { withRouter } from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import Board from "./board";
import {deleteTag, SetBoard, setDescription, setSettings, setTag} from "../../redux/boardReducer";
import {useHistory} from "react-router-dom";
import colum from "./components/colum";

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

  let onSubmitTags = (data, index, column) => {
    data = {
      text: data.text,
      color: data.color
    }
    props.setTag(props.board, column, index, data)
  }

  let deleteTag = (column, index, indexTag) => {
    props.deleteTag(props.board, column, index, indexTag)
  }

  return(
    <Board board={props.board} names={props.names} onSubmitTags={onSubmitTags} deleteTag={deleteTag} onSubmitDescription={onSubmitDescription} onSubmitSettings={onSubmitSettings} />
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
  connect(mapStateToProps, {SetBoard, setSettings, setDescription, setTag, deleteTag})
)(BoardContainer)