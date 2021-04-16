import React, {useState} from "react";
import s from './../board.module.scss';

import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";

let Time = (props) => {

    const {register, errors, handleSubmit} = useForm()

    let time = {
        date() {
            let time = new Date()
            let date
            let year = time.getFullYear()
            let month
            if (time.getDate() < 10) {
                date = "0" + time.getDate()
            } else {
                date = time.getDate()
            }
            if (time.getMonth() < 10) {
                month = "0" + (time.getMonth() + 1)
            } else {
                month = time.getMonth()
            }
            return year + "-" + month + "-" + date
        },
        time() {
            let time = new Date()
            let hours
            let minutes
            if (time.getHours() < 10) {
                hours = "0" + time.getHours()
            } else {
                hours = time.getHours()
            }
            if (time.getMinutes() < 10) {
                minutes = "0" + time.getMinutes()
            } else {
                minutes = time.getMinutes()
            }
            return hours + ":" + minutes
        }
    }

    return (
        <div className={s.time}>
            <h2>Сроки</h2>
            <form onSubmit={handleSubmit(props.submit)}>
                <div className={s.startTime}>
                    <h3>Дата начал</h3>
                    <TextField
                        id="date"
                        type="date"
                        label={"Дата"}
                        defaultValue={props.time.startData ? props.time.startData : time.date()}
                        className={s.Data}
                        style={{
                            width: "300px"
                        }}
                        inputRef={register()}
                        name={"startData"}
                    />
                    <TextField
                        id="time"
                        type="time"
                        label={"Время"}
                        defaultValue={props.time.startTime ? props.time.startTime : time.time()}
                        className={s.Time}
                        style={{
                            width: "116px"
                        }}
                        inputRef={register()}
                        name={"startTime"}
                    />
                </div>
                <div className={s.endTime}>
                    <h3>Дата окончания</h3>
                    <TextField
                        id="date"
                        type="date"
                        label={"Дата"}
                        defaultValue={props.time.endData ? props.time.startData : time.date()}
                        className={s.Data}
                        style={{
                            width: "300px"
                        }}
                        inputRef={register()}
                        name={"endData"}
                    />
                    <TextField
                        id="time"
                        type="time"
                        label={"Время"}
                        defaultValue={props.time.endTime ? props.time.startTime : time.time()}
                        className={s.Time}
                        style={{
                            width: "116px"
                        }}
                        inputRef={register()}
                        name={"endTime"}
                    />
                </div>
                <div className={s.submit}>
                    <Button variant="contained" type={"submit"} color="primary">Установить время</Button>
                </div>
            </form>
        </div>
    )
}

export default Time