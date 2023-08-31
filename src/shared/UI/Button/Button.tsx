import React, {ComponentProps, FunctionComponent} from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent<ComponentProps<"button">> = ({
  children,
  disabled,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
