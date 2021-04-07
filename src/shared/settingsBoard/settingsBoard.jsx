import React from 'react';
import s from './colorBoard.module.scss';
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ColorBoard from "./colorBoard";


let settingsBoard = ({register, handleSubmit, errors, submit, names, nameButton}) => {

  let validateName = (value) => {
    if (names.length !== 0) {
      for (let i = 0; i < names.length; i++ ) {
        if (value === names[i].name){
          return false
        }
      }
    }
    return true
  }

  return (
    <div className={s.colorBoard}>
      <form onSubmit={handleSubmit(submit)}>
        <div className={s.nameBoard}>
          <TextField error={ errors.name } inputRef={register({ required: true, validate: validateName })} style={{width: "300px"}} name={"name"} label="Название" />
        </div>
        <ColorBoard register={register} />
        <div className={s.submit}>
          <Button type={"submit"} style={{width: "307.72px"}} color={"primary"} variant="contained" >{nameButton}</Button>
        </div>
      </form>
    </div>
  )
};

export default settingsBoard;