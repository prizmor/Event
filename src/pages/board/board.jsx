import React, {useState} from 'react';
import s from './board.module.scss';
import Header from "./components/header";
import Settings from "./components/settings";

let Board = (props) => {

  let color = () => {
    switch (props.board.color) {
      case "white": {
        return "#ffffff"
      }
      case "pink": {
        return "#e91e63"
      }
      case "purple": {
        return "#9c27b0"
      }
      case "indigo": {
        return "#3f51b5"
      }
      case "blue": {
        return "#2196f3"
      }
      case "lightBlue": {
        return "#03a9f4"
      }
      case "teal": {
        return "#009688"
      }
      case "green": {
        return "#4caf50"
      }
      case "lightGreen": {
        return "#8bc34a"
      }
      default: return "#ffffff"
    }
  }



  let [settings, openSettings] = useState(false)
  return (
    <div className={s.board} style={{background: color()}}>
      <Header openSettings={openSettings} name={props.board.name} />
      {settings && <Settings openSettings={openSettings} names={props.names} submit={props.onSubmit} />}
    </div>
  )
};

export default Board;