import React, {useState} from "react";
import s from './../board.module.scss';
import ItemCheckListHome from "./itemCheckListHome";

let Home = (props) => {

    return (
        <div className={s.home}>
            <div className={s.timeHome} onClick={() => {
                props.setPage("time")
            }}>
                <h2>Время</h2>
                {props.task.time.endTime ? <div className={s.timeDiv}>
                    <div className={s.startTime}>
                        <h3>Начать в</h3>
                        <div>Дата: {props.task.time.startData}</div>
                        <div>Время: {props.task.time.startTime}</div>
                    </div>
                    <div className={s.endTime}>
                        <h3>Закончить в</h3>
                        <div>Дата: {props.task.time.endData}</div>
                        <div>Время: {props.task.time.endTime}</div>
                    </div>
                </div> : <div>Отсутствует</div>}
            </div>
            <div className={s.tagsHome} onClick={() => {
                props.setPage("tags")
            }}>
                <h2>Теги</h2>
                {props.task.tags[0] ? <div>{props.task.tags.map(data => {
                    return <div style={props.color(data.color)} className={s.tag}>
                        <div className={s.textTag}>
                            {data.text}
                        </div>
                    </div>
                })}</div> : <div>Отсутствует</div>}
            </div>
            <div className={s.descriptionHome} onClick={() => {
                props.setPage("description")
            }}>
                <h2>Описание</h2>
                {props.task.description ? <div>{props.task.description}</div> : <div>Отсутствует</div>}
            </div>
            <div className={s.checkListHome}>
                <h2>Чеклист</h2>
                <div className={s.items}>
                    <div className={s.progress}>
                        <div style={{height: "5px", background: props.colorStatusCheckList(String(Math.floor(props.task.checkList.progress))), width: String(Math.floor(props.task.checkList.progress)) + "%"}}>
                        </div>
                    </div>
                    {
                        props.task.checkList.items.map((data, index) => {
                            return <ItemCheckListHome data={data} index={index} action={props.action} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home