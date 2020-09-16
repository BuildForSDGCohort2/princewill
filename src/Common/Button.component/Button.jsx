import React from "react";
import ButtonStyles from "./Button.module.css";

const { button } = ButtonStyles;
const Button = ({
  name,
  color,
  backgroundColor,
  click,
  text,
  type,

  className,
  width,
  outline,
  margin,
  padding,
  border,
  borderRadius,
  ref,
}) => (
  <div className={className ? className : button}>
    <button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "red",
        color: color ? color : "#fff",
        width: width ? width : null,
        outline: outline ? outline : null,
        margin: margin ? margin : null,
        padding: padding ? padding : null,
        border: border ? border : null,
        borderRadius: borderRadius ? borderRadius : null,
        cursor: "pointer",
      }}
      onClick={click ? click : null}
      name={name ? name : null}
      className={className ? className : button}
      ref={ref ? ref : null}
    >
      {text ? text : "click"}
    </button>
  </div>
);

export default Button;
