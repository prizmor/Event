import React, {useState} from "react";
import s from './../board.module.scss';
import {Checkbox} from "@material-ui/core";

let ItemCheckListHome = (props) => {
    return (
        <div className={s.itemCheckListHome} onClick={() => props.action(props.index, props.data.performed)}>
            <Checkbox
                color="primary"
                checked={props.data.performed}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            {props.data.text}
        </div>
    )
}

export default ItemCheckListHome