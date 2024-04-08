import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onCLick ? () => props.onCLick() : null}
    ></button>
  );
};

const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onCLick ? () => props.onCLick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onCLick: PropTypes.func,
};

export default Button;
