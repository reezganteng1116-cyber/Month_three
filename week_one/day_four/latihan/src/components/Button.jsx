import React from "react";
import styles from "../styles/Button.module.css";

function Button({ label, type }) {
  const buttonClass =
    type === "primary" ? styles.primary : styles.default;

  return <button className={buttonClass}>{label}</button>;
}

export default Button;
