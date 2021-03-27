import React from 'react';
import s from './header.module.scss';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";

let Header = (props) => {
  return (
    <div className={s.topBar}>
      <div className={s.home}>
        <Link to={"/"}>
          <IconButton aria-label="upload picture" component="span">
            <HomeIcon style={{ color: grey[50] }} />
          </IconButton>
        </Link>
      </div>
      <div className={s.logo}>
        <span>
          Event
        </span>
      </div>
    </div>
  )
};

export default Header;