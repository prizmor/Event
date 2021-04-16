import React, {useState} from "react";
import s from './../board.module.scss';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {grey} from "@material-ui/core/colors";

let ItemCheckList = (props) => {
    return (
        <div className={s.itemCheckList}>
            <div className={s.textItemCheckList}>{props.text}</div>
            <div className={s.closeTag}>
                <IconButton onClick={() => {
                    props.deleteItemCheckList(props.index)
                }} size={"small"} aria-label="upload picture" component="span">
                    <CloseIcon style={{color: grey[900], width: "10px", height: "10px"}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default ItemCheckList