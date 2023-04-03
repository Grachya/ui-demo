import { DialogDisclosure } from "reakit/Dialog";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const CMDialogDisclosure = ({
  label,
  handleClick,
  backgroundColor = "#722362",
  ...rest
}) => {
  const style = {
    backgroundColor,
  };

  return (
    <DialogDisclosure
      className={styles.dialogDisclosure}
      onClick={handleClick}
      style={style}
      {...rest}
    >
      {label}
    </DialogDisclosure>
  );
};

CMDialogDisclosure.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CMDialogDisclosure;
