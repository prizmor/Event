import React from 'react';
import s from './colorBoard.module.scss';
import {Radio, RadioGroup, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";


let ColorBoard = ({register}) => {

  return (
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
        </div>)
};

export default ColorBoard;