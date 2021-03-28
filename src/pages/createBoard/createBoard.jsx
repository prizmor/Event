import React from 'react';
import s from './createBoard.module.scss';
import { useForm } from "react-hook-form";
import Settings from "../../shared/settingsBoard/settingsBoard";

let CreateBoard = (props) => {

  const {register, errors, handleSubmit} = useForm()

  return (
    <div className={s.createBoard}>
      <div className={s.createBoardRow}>
        <header>
          <h2>Создания доски</h2>
        </header>
        <div>
          <Settings nameButton={"Создать"} register={register} handleSubmit={handleSubmit} errors={errors} submit={props.submit} names={props.boards.boards} />
        </div>
      </div>
    </div>
  )
};

export default CreateBoard;