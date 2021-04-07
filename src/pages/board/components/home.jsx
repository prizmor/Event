import React, {useState} from "react";
import s from './../board.module.scss';

let Home = (props) => {

    return (
        <div className={s.home}>
            <div className={s.tagsHome} onClick={() => {props.setPage("tags")}}>
                <h2>Теги</h2>
                {props.task.tags ? <div>{props.task.tags.map(data => {
                    return <div style={props.color(data.color)} className={s.tag}>
                        <div className={s.textTag}>
                            {data.text}
                        </div>
                    </div>
                })}</div> : <div>Отсутствует</div>}
            </div>
            <div className={s.descriptionHome} onClick={() => {props.setPage("description")}}>
                <h2>Описание</h2>
                {props.task.description ? <div>{props.task.description}</div> : <div>Отсутствует</div>}
            </div>
        </div>
    )
}

export default Home