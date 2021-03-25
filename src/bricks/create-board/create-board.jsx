import React from 'react';
import s from './scss/create-board.module.scss';
import Form from "./form";

let CreateBoard = (props) => {
  return (
    <div className={s.createBoard}>
      <div className={s.createBoardRow}>
        <header>
          <h2>Создания доски</h2>
        </header>
        <Form onSubmit={props.submit} />
      </div>
    </div>
  )
};

export default CreateBoard;