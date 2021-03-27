import React from 'react';
import s from './createBoard.module.scss';
import { Radio, RadioGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";

let CreateBoard = (props) => {

  const {register, errors, handleSubmit} = useForm()

  return (
    <div className={s.createBoard}>
      <div className={s.createBoardRow}>
        <header>
          <h2>Создания доски</h2>
        </header>
        <div>
          <form onSubmit={handleSubmit(props.submit)}>
            <div className={s.nameBoard}>
              <TextField error={ errors.name } inputRef={register({ required: true })} style={{width: "300px"}} name={"name"} label="Название" />
            </div>
            <div className={s.colorBoard}>
                <RadioGroup>
                  <div className={s.color}>
                    <div>
                      <Radio inputRef={register} style={{color:"black", width: "60px", height: "60px", background: "#ffffff", borderRadius: "0"}} name="color" value="white" />
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#e91e63", borderRadius: "0"}} name="color" value="pink" />
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#9c27b0", borderRadius: "0"}} name="color" value="purple" />
                    </div>
                    <div>
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#3f51b5", borderRadius: "0"}} name="color" value="indigo" />
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#2196f3", borderRadius: "0"}} name="color" value="blue" />
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#03a9f4", borderRadius: "0"}} name="color" value="lightBlue" />
                    </div>
                    <div>
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#009688", borderRadius: "0"}} name="color" value="teal" />
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#4caf50", borderRadius: "0"}} name="color" value="green" />
                      <Radio inputRef={register} style={{color:"white", width: "60px", height: "60px", background: "#8bc34a", borderRadius: "0"}} name="color" value="lightGreen" />
                    </div>
                  </div>
                </RadioGroup>
            </div>
            <div className={s.submit}>
              <Button type={"submit"} style={{width: "307.72px"}} color={"primary"} variant="contained" >Создать</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default CreateBoard;