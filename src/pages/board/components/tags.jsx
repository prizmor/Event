import React, {useState} from "react";
import s from "./../board.module.scss"
import Tag from "./tag";
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import ColorBoard from "../../../shared/settingsBoard/colorBoard";

let Tags = (props) => {

    const {register, errors, handleSubmit} = useForm()

    return (
        <div className={s.tags}>
            <h2>Создать теги</h2>
            <div className={s.tagsDiv}>
                {props.tags.map((data, index) => {
                    return <Tag color={props.color(data.color)} delete={props.deleteTag} index={index} key={index}
                                text={data.text}/>
                })}
            </div>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <TextField error={errors.text} inputRef={register({required: true, maxLength: 20})}
                           style={{width: "300px"}} name={"text"} label="Название"/>
                <ColorBoard register={register}/>
                <div className={s.submit}><Button variant="contained" color="primary" type={"submit"}>Добавить</Button>
                </div>
            </form>
        </div>
    )
}

export default Tags