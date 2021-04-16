import React from 'react';
import {connect} from "react-redux";
import Home from './home';

class HomeContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <Home {...this.props} />
        );
    };
}


let mapStateToProps = (state) => {

    return {
        boards: state.Board.PresentBoards.boards,
    }
};

export default connect(mapStateToProps, {})(HomeContainer);