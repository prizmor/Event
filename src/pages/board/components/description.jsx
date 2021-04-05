import React, {useState} from "react";
import s from './../board.module.scss';
import {TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

let Description = (props) => {

    const {register, errors, handleSubmit} = useForm()

    return (
        <div className={s.description}>
            <h2>
                Изменения описания
            </h2>
            <form onSubmit={handleSubmit(props.submit)}>
                <TextField
                    inputRef={register({ required: true, maxLength: "750" })}
                    label={"Описание"}
                    name={"description"}
                    multiline
                    error={errors.description}
                    rows={6}
                    style={{width: "750px"}}
                    defaultValue={props.description}
                    variant={"filled"}
                    className={s.descriptionText}
                />
                <div className={s.submit}>
                    <Button variant="contained" type={"submit"} color="primary">
                        Изменить
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Description