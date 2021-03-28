import React from 'react';
import s from './../board.module.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";

let Header = ({name, openSettings}) => {



  return (
    <div className={s.header}>
      <div className={s.name}>
        <span>
          {name}
        </span>
      </div>
      <div className={s.settingsButton}>
        <IconButton onClick={() => openSettings(true) } size={"small"} aria-label="upload picture" component="span">
          <SettingsIcon style={{ color: grey[50] }} />
        </IconButton>
      </div>
    </div>
  )
};

export default Header;