import React, {useEffect} from 'react';
import {withRouter} from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import Board from "./board";
import {
    actionCheckList,
    deleteItemCheckList,
    deleteTag,
    SetBoard,
    setDescription, setItemCheckList,
    setSettings,
    setTag,
    setTime
} from "../../redux/boardReducer";
import {useHistory} from "react-router-dom";
import colum from "./components/colum";

let BoardContainer = (props) => {

    const history = useHistory();

    useEffect(() => {
        props.SetBoard(props.match.params.name)
    }, [props.match.params.name])

    let colorStatusCheckList = (percent) => {

        let color = ["ff0200", "ff1a00", "ff3c00", "ff5100", "ff7100", "ff8d00", "f0ab00", "b8be00", "7fd200", "31ed00"]
        percent = percent.split('')
        if (percent.length > 2) {
            return "#" + color[9]
        }
        return "#" + color[percent[0] - 1]
    }

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

    let deleteItemCheckList = (column, index, indexTag) => {
        props.deleteItemCheckList(props.board, column, index, indexTag)
    }

    let onSubmitTime = (column, index, time) => {
        props.setTime(props.board, column, index, time)
    }

    let onSubmitItemCheckList = (column, index, text) => {
        props.setItemCheckList(props.board, column, index, text)
    }

    let actionCheckList = (column, index, indexItemsCheckList, performed) => {
        props.actionCheckList(props.board, column, index, indexItemsCheckList, performed)
    }

    return (
        <Board board={props.board} onSubmitTime={onSubmitTime} names={props.names} onSubmitTags={onSubmitTags} colorStatusCheckList={colorStatusCheckList}
               deleteTag={deleteTag} onSubmitDescription={onSubmitDescription} onSubmitSettings={onSubmitSettings} deleteItemCheckList={deleteItemCheckList}
               onSubmitItemCheckList={onSubmitItemCheckList} actionCheckList={actionCheckList}/>
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
    connect(mapStateToProps, {SetBoard, setSettings, setDescription, setTag, deleteTag, setTime, deleteItemCheckList, setItemCheckList, actionCheckList})
)(BoardContainer)