import React from 'react';
import {connect} from "react-redux";
import CreateBoard from "./createBoard";
import Board, {createBoard} from "../../redux/boardReducer";
import {useHistory} from "react-router-dom";

let CreateBoardContainer = (props) => {

    const history = useHistory();

    let submit = (data) => {

        let dataBoard = {...data}

        if (dataBoard.color === null) {
            dataBoard.color = "white"
        }
        props.createBoard(dataBoard)
        history.push('/')
    }

    return (
        <CreateBoard {...props} submit={submit}/>
    );
};

let mapStateToProps = (state) => {
    return {
        boards: state.Board.PresentBoards
    }
};

export default connect(mapStateToProps, {createBoard})(CreateBoardContainer);