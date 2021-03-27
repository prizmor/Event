import React from 'react';
import './App.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import s from './App.module.scss';
import HeaderContainer from "./shared/header/headerContainer";
import HomeContainer from "./pages/home/homeContainer";
import CreateBoardContainer from "./pages/createBoard/createBoardContainer";
import {connect} from "react-redux";
import {initApp} from "./redux/boardReducer";

class App extends React.Component  {

  componentDidMount() {
    this.props.initApp()
  }

  render() {

    if (!this.props.init){
      return <div></div>
    }

    return (
      <BrowserRouter>
        <div>
          <div className={s.topbar} >
            <HeaderContainer />
          </div>
          <div className={s.main}>
            <Route exact path={'/'} component={() => <HomeContainer />} />
            <Route exact path={'/createBoard'} component={() => <CreateBoardContainer />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    init: state.Board.initApp
  }
}

export default connect(mapStateToProps, {initApp})(App);
