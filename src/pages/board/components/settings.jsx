import React from 'react';
import s from './../board.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import {useForm} from "react-hook-form";
import SettingsBoard from "../../../shared/settingsBoard/settingsBoard";

let Settings = ({openSettings, names, submit}) => {

  const {register, errors, handleSubmit} = useForm()

  return (
    <div className={s.settings}>
      <div className={s.windowSettings}>
        <span className={s.close}>
          <IconButton onClick={() => openSettings(false) } size={"small"} aria-label="upload picture" component="span">
            <CloseIcon style={{ color: grey[900] }} />
          </IconButton>
        </span>
        <SettingsBoard register={register} nameButton={"Сохранить"} errors={errors} handleSubmit={handleSubmit} names={names} submit={submit} />
      </div>
    </div>
  )
};

export default Settings;