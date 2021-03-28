import React from 'react';
import s from '../home.module.scss';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

let Board = (props) => {

  let color = () => {
    switch (props.color) {
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

  return (
    <div className={s.board}>
      <Link to={"board/" + props.name} style={{textDecoration: "none"}}>
        <Button variant="contained" style={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px', background: color()}}>
          {props.name}
        </Button>
      </Link>
    </div>
  )
};

export default Board;