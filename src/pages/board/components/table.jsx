import React, {useState} from "react";
import s from './../board.module.scss';
import Column from "./colum";
import TaskSettings from "./taskSettings";
import _ from "lodash"

let Table = (props) => {

    let [taskSettings, setTaskSettings] = useState(
        {
            windowOpen: false, column: "", index: ""
        }
    )


    return (
        <div className={s.table}>
            {_.map(props.board.stages, (data, key) => {
                return (
                    <Column setTaskSettings={setTaskSettings} key={key} name={key} data={data}/>
                )
            })}
            {taskSettings.windowOpen &&
            <TaskSettings onSubmitTime={props.onSubmitTime} color={props.color} deleteTag={props.deleteTag}
                          onSubmitTags={props.onSubmitTags} setTaskSettings={setTaskSettings}
                          onSubmitDescription={props.onSubmitDescription} board={props.board}
                          taskSettings={taskSettings} deleteItemCheckList={props.deleteItemCheckList}
                          onSubmitItemCheckList={props.onSubmitItemCheckList}
                          colorStatusCheckList={props.colorStatusCheckList}
                          actionCheckList={props.actionCheckList}/>}
        </div>
    )

}

export default Table;