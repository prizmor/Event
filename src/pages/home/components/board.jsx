import React from 'react';
import s from '../home.module.scss';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

let Board = (props) => {
  let colors = (color) => {
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

  return (
    <div className={s.board}>
      <Link to={"board/" + props.name} style={{textDecoration: "none"}}>
        <Button variant="contained" style={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px', background: colors(props.color).background, color: colors(props.color).color}}>
          {props.name}
        </Button>
      </Link>
    </div>
  )
};

export default Board;