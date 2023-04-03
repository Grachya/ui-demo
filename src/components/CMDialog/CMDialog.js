import { Dialog } from "reakit/Dialog";
import styles from "./styles.module.css";

const CMDialog = (props) => (
  <Dialog {...props} className={styles.dialog}>
    {props.children}
  </Dialog>
);

export default CMDialog;