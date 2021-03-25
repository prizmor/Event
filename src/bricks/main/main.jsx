import React from 'react';
import s from './scss/main.module.scss';
import BoardAdd from "./boardAdd";

let Main = (props) => {
  return (
    <div className={s.main}>

      <BoardAdd />
    </div>
  )
};

export default Main;