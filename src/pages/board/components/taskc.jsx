import React from "react";
import s from './../board.module.scss';
import CloseIcon from "@material-ui/icons/Close";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import {useDrag} from "react-dnd";

let Taskc = (props) => {

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "card",
    item: { id: props.id }
  }))

    return collected.isDragging ? (
      <div className={s.taskc} ref={dragPreview}>
        <div>
          <div className={s.tags}>

          </div>
          <div className={s.text}>
            {props.text}
          </div>
        </div>
        <div className={s.close}>
          <IconButton className={s.button} size={"small"} aria-label="upload picture" component="span">
            <CloseIcon style={{ color: grey[900], width: "10px", height: "10px" }} />
          </IconButton>
        </div>
      </div>)
      :
      (<div className={s.taskc} ref={drag}>
        <div>
          <div className={s.tags}>

          </div>
          <div className={s.text}>
            {props.text}
          </div>
        </div>
        <div className={s.close}>
          <IconButton className={s.button} size={"small"} aria-label="upload picture" component="span">
            <CloseIcon style={{ color: grey[900], width: "10px", height: "10px" }} />
          </IconButton>
        </div>
      </div>
    )
}

export default Taskc;