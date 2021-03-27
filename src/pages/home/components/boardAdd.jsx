import React from 'react';
import s from '../home.module.scss';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

let BoardAdd = () => {
  return (
    <Link to={"/createBoard"}>
      <div className={s.board}>
        <Button variant="contained" style={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px', background: "white"}}>
          Создать
        </Button>
      </div>
    </Link>
  )
};

export default BoardAdd;