import React from "react";
import { Button } from "reakit/Button";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const CMButton = ({ label, size = "md", backgroundColor = "blue", handleClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };
  return <Button onClick={handleClick} className={styles.button} style={style}>{label}</Button>;
};

CMButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default CMButton;
