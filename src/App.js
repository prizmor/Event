import React from 'react';
import './App.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import s from './App.module.scss';
import TopBarContainer from "./bricks/top-bar/top-bar-container";
import MainContainer from "./bricks/main/main-container";
import CreateBoardContainer from "./bricks/create-board/create-board-container";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className={s.topbar} >
          <TopBarContainer />
        </div>
        <div className={s.main}>
          <Route exact path={'/'} component={() => <MainContainer />} />
          <Route exact path={'/createBoard'} component={() => <CreateBoardContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
