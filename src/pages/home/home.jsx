import React from 'react';
import s from './home.module.scss';
import BoardAdd from "./components/boardAdd";
import Board from "./components/board";

let Home = (props) => {



  let boards = props.boards.map(b => <Board color={b.color} name={b.name} key={b.id} />)

  return (
    <div className={s.main}>
      {boards}
      <BoardAdd />
    </div>
  )
};

export default Home;