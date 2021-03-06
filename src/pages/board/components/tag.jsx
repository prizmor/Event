import React, {useState} from "react";
import s from "./../board.module.scss"
import CloseIcon from "@material-ui/icons/Close";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";

let Tag = (props) => {

    return (
        <div style={props.color} className={s.tag}>
            <div className={s.textTag}>
                {props.text}
            </div>
            <div className={s.closeTag}>
                <IconButton onClick={() => {
                    props.delete(props.index)
                }} size={"small"} aria-label="upload picture" component="span">
                    <CloseIcon style={{color: grey[900], width: "10px", height: "10px"}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Tag