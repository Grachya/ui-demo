import React from "react";
import { Button } from "reakit/Button";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const CMButton = ({
  label,
  isIcon = false,
  kind = "primary",
  size = "md",
  handleClick,
}) => {
  let scale = 1;
  let classNameString = `${styles.button}`;
  let iconMargin;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  if (kind === "secondary")
    classNameString = `${styles.button} ${styles.secondary}`;

  if(!label) iconMargin = 0;

  const style = {
    padding: `${scale * 0.5}rem ${scale * 0.5}rem`,
  };

  const iconStyle = {
    margin: iconMargin,
  }

  const icon = (
    <div className={styles.icon} style={iconStyle}>
      <svg
        style={{color: "ffffff"}}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-circle"
        viewBox="0 0 16 16"
        role="img"
        aria-hidden
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          fill="#ffffff"
        ></path>
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  );
  return (
    <Button onClick={handleClick} className={classNameString} style={style}>
      {isIcon && icon}
      {label}
    </Button>
  );
};

CMButton.propTypes = {
  isIcon: PropTypes.bool,
  label: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default CMButton;
