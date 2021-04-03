import React from 'react';
import s from './../board.module.scss';
import CloseIcon from "@material-ui/icons/Close";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Taskc from "./taskc";
import {useDrop} from "react-dnd";


let Column = (props) => {


  const [{canDrop, isOver}, drop] = useDrop(() => ({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

    return (
      <div className={s.column}>
        <div className={s.wrapper}>
          <header className={s.headerColumn}>
            <div className={s.name}>{props.data.name}</div>
            <div>
              <IconButton className={s.delete} size={"small"} aria-label="upload picture" component="span">
                <CloseIcon style={{ color: grey[900] }} />
              </IconButton>
            </div>
          </header>
          <div className={s.body} style={{background: isOver && "#dedede"}} ref={drop}>
            {props.data.items.map(data => {
              return(
                <Taskc text={data.text} id={data.id} key={data.id} />
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default Column;