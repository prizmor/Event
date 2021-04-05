import React from 'react';
import s from './../board.module.scss';
import CloseIcon from "@material-ui/icons/Close";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Task from "./task";
import {useDrop} from "react-dnd";


let Column = (props) => {



    return (
      <div className={s.column}>
        <div className={s.wrapper}>
          <header className={s.headerColumn}>
            <div className={s.name}>{props.name}</div>
            <div>
              <IconButton className={s.delete} size={"small"} aria-label="upload picture" component="span">
                <CloseIcon style={{ color: grey[900] }} />
              </IconButton>
            </div>
          </header>
          <div className={s.body}>
            {props.data.task.map((data, index) => {
              return(
                <Task setTaskSettings={props.setTaskSettings} text={data.text} id={data.id} key={data.id} index={index} columnName={props.name} />
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default Column;