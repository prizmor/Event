import React from 'react';
import s from './scss/main.module.scss';
import Button from '@material-ui/core/Button';

let Board = (props) => {
  return (
    <div className={s.board}>
      <Button onClick={props.click} variant="contained" style={{maxWidth: '300px', maxHeight: '200px', minWidth: '300px', minHeight: '200px', background: props.color}}>
        {props.name}
      </Button>
    </div>
  )
};

export default Board;