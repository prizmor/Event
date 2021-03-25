import React from 'react';
import s from './scss/create-board.module.scss';
import { Field } from 'redux-form';
import {reduxForm} from "redux-form";
import {BoardName, radioButton} from "../../redux-form/patern";
import {maxlength, requiredField} from "../../redux-form/validate";
import Radio from '@material-ui/core/Radio';

const minlengthName = maxlength(15)

let Form = (props) => {
  return (
    <form onSubmit={props.submit} className={s.form}>
      <Field name={"name"} type={"text"} component={BoardName} validate={[minlengthName, requiredField]} />
      <Field name="sex" component={radioButton} />
      <button type="submit">
        Submit
      </button>
    </form>
  )
};

Form = reduxForm({
  form: 'createBoard'
})(Form)

export default Form;