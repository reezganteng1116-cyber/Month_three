import React from "react";
import styles from "../styles/AlertBox.module.css";

function AlertBox({ type, message }) {
  let alertClass;

  if (type === "success") alertClass = styles.success;
  else if (type === "warning") alertClass = styles.warning;
  else alertClass = styles.error;

  return <div className={alertClass}>{message}</div>;
}

export default AlertBox;
