import React from 'react';
import {connect} from "react-redux";
import Home from './home';

let HomeContainer = (props) => {


    return (
      <Home {...props} />
    );

};

let mapStateToProps = (state) =>{
  debugger
  return {
    boards: state.Board.PresentBoards.boards,
  }
};

export default connect(mapStateToProps, {})(HomeContainer);