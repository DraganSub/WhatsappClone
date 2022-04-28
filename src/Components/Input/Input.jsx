import React from "react";

const Input = (props) => {
  let label = false;
  if (props.label) {
    label = <label htmlFor={props.name}>{props.labelFor}</label>;
  }
  return (
    <>
      {props.label && label}
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

export default Input;
