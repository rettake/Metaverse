import React, { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface IProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FunctionComponent<IProps> = ({
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
