import React, {useEffect, useState} from "react";
import s from './../board.module.scss';
import CloseIcon from "@material-ui/icons/Close";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Home from "./home";
import Tags from "./tags";
import CheckList from "./checkList";
import Time from "./time";
import Description from "./description";

let TaskSettings = (props) => {

    let [state, setState] = useState(props.board.stages[props.taskSettings.column].task[props.taskSettings.index])
    let [page, setPage] = useState("home")

    useEffect(() => {
        setState(props.board.stages[props.taskSettings.column].task[props.taskSettings.index])
    }, [props.taskSettings, props.board.stages[props.taskSettings.column].task[props.taskSettings.index]])

    let onSubmitDescription = (text) => {
        props.onSubmitDescription(text.description, props.taskSettings.index, props.taskSettings.column)
    }

    let onSubmitTags = (data) => {
        props.onSubmitTags(data, props.taskSettings.index, props.taskSettings.column)
    }

    let deleteTag = (index) => {
        props.deleteTag(props.taskSettings.column, props.taskSettings.index, index)
    }

    return (
        <div className={s.taskSettings}>
            <div className={s.windowSettings}>
                <div className={s.workspace}>
                    <div className={s.content}>
                        <span className={s.text}>
                            {state.text}
                        </span>
                        <div className={s.mainContent}>
                            {page === "home" && <Home task={state} color={props.color} setPage={setPage} />}
                            {page === "tags" && <Tags deleteTag={deleteTag} onSubmit={onSubmitTags} tags={state.tags} color={props.color} />}
                            {page === "checkList" && <CheckList />}
                            {page === "time" && <Time />}
                            {page === "description" && <Description submit={onSubmitDescription} description={state.description} />}
                        </div>
                    </div>
                    <div className={s.nav}>
                        <div className={s.close}>
                            <IconButton onClick={() => props.setTaskSettings({windowOpen: false, IdTask: ""}) } size={"small"} aria-label="upload picture" component="span">
                                <CloseIcon style={{ color: grey[900] }} />
                            </IconButton>
                        </div>
                        <div className={s.bookmarks}>
                            <div><Button onClick={() => setPage("home")} style={{width: "168px", borderRadius: "none"}}>Главная</Button></div>
                            <div><Button onClick={() => setPage("tags")} style={{width: "168px", borderRadius: "none"}}>Теги</Button></div>
                            <div><Button onClick={() => setPage("checkList")} style={{width: "168px", borderRadius: "none"}}>Чеклист</Button></div>
                            <div><Button onClick={() => setPage("time")} style={{width: "168px", borderRadius: "none"}}>Время</Button></div>
                            <div><Button onClick={() => setPage("description")} style={{width: "168px", borderRadius: "none"}}>Описание</Button></div>
                            <div className={s.delete}><Button style={{width: "168px", borderRadius: "none"}} color="secondary">Удалить</Button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskSettings