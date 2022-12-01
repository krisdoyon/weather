import React from "react";
import styles from "./Button.module.scss";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`${styles.btn} ${props.fill ? styles.fill : ""} ${
        props.className ? props.className : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
});

export default Button;
