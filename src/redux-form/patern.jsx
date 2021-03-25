import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from "@material-ui/core/Radio";
import {FormControl, FormControlLabel, RadioGroup} from "@material-ui/core";

export const BoardName = ({label, input, meta: { touched, invalid, error }, ...custom}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...custom}
  />
);

export const radioButton = ({ input, ...rest }) => (
    <RadioGroup  {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>

  )
//<Radio style={{color: "white", background: "red", borderRadius: "0"}} />
//<Radio style={{color: "white", background: "red", borderRadius: "0"}} />