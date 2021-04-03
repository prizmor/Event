import React, {useState} from "react";
import s from './../board.module.scss';
import Column from "./colum";

let Table = (props) => {

    let [state, setState] = useState([
      {
        name: "falas",
        id: "1",
        items: [
          {
            id: "1",
            text: "hello word"
          },
          {
            id: "2",
            text: "hello word 2"
          }
        ]
      },
      {
        name: "falass",
        id: "2",
        items: [
          {
            id: "3",
            text: "hello word 3"
          },
          {
            id: "4",
            text: "hello word 4"
          }
        ]
      }
    ])

    return(
      <div className={s.table}>
        {state.map(data => {

          return (
            <Column key={data.id} data={data} />
          )
        })}
      </div>
    )

}

export default Table;