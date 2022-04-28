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
      />
    </>
  );
};

export default Input;
