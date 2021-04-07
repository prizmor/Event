import React, {useState} from 'react';
import s from './board.module.scss';
import Header from "./components/header";
import Settings from "./components/settings";
import Table from "./components/table";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

let Board = (props) => {



  let color = (color) => {
    switch (color) {
      case "white": {
        return {
            background: "#ffffff",
            color: "black"
        }
      }
      case "pink": {
        return {
            background: "#e91e63",
            color: "white"
        }
      }
      case "purple": {
        return {
            background: "#9c27b0",
            color: "white"
        }
      }
      case "indigo": {
        return {
            background: "#3f51b5",
            color: "white"
        }
      }
      case "blue": {
        return {
            background: "#2196f3",
            color: "white"
        }
      }
      case "lightBlue": {
        return {
            background: "#03a9f4",
            color: "white"
        }
      }
      case "teal": {
        return {
            background: "#009688",
            color: "white"
        }
      }
      case "green": {
        return {
            background: "#4caf50",
            color: "white"
        }
      }
      case "lightGreen": {
        return {
            background: "#8bc34a",
            color: "white"
        }
      }
      default: return {
          background: "#ffffff",
          color: "black"
      }
    }
  }



  let [settings, openSettings] = useState(false)
  return (
    <div className={s.board} style={{background: color(props.board.color).background}}>
      <Header openSettings={openSettings} name={props.board.name} />
      <DndProvider backend={HTML5Backend}>
        <Table board={props.board} color={color} deleteTag={props.deleteTag} onSubmitTags={props.onSubmitTags} onSubmitDescription={props.onSubmitDescription} />
      </DndProvider>
      {settings && <Settings onSubmitTags={props.onSubmitTags} openSettings={openSettings} names={props.names} submit={props.onSubmitSettings} />}
    </div>
  )
};

export default Board;