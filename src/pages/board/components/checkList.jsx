import React, {useState} from "react";
import s from './../board.module.scss';
import ItemCheckList from "./itemCheckList";
import {useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
let CheckList = (props) => {

    const {register, errors, handleSubmit} = useForm()

    return (
        <div className={s.checkList}>
            <h2>Чеклист</h2>
            <div className={s.itemsCheckList}>
                {props.items.items.map((data, index) => {
                    return  <ItemCheckList text={data.text} index={index} deleteItemCheckList={props.deleteItemCheckList} />
                })}
            </div>
            <div className={s.addItem}>
                <form className={s.form} onSubmit={handleSubmit(props.onSubmitItemCheckList)}>
                    <TextField id="standard-basic" label={"Добавить элемент"} inputRef={register({maxLength: "1000"})} name={"text"} style={{width: "250px"}} error={errors.description} />
                    <Button variant="contained" type={"submit"} style={{height: "45px", margin: "0 0 0 10px"}} color="primary">Добавить</Button>
                </form>
            </div>
        </div>
    )
}

export default CheckList  