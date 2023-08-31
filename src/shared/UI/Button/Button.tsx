import React, {ComponentProps, FunctionComponent} from "react";
import styles from "./Button.module.css";

interface IButtonProps extends ComponentProps<"button"> {
  // children: React.ReactNode;
  // disabled?: boolean;
  // type?: "button" | "submit" | "reset";
  // onClick?: () => void;
}

const Button: FunctionComponent<IButtonProps> = ({
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
