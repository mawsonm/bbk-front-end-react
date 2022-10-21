import classes from "./Input.module.css";
import React from "react";

const Input = (props, ref) => {
  console.log(props.hasError ? "invalid" : "");
  let formClasses = `${classes.formGroup} ${
    props.hasError ? classes.invalid : ""
  }`;
  return (
    <div className={formClasses}>
      <input
        type={props.type}
        className={classes.formField}
        placeholder={props.placeholder}
        name={props.id}
        id={props.id}
        onChange={props.change}
        onBlur={props.blur}
        required
      />
      <label htmlFor={props.id} className={classes.formLabel}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
