import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface IFieldProps {
  placeholder: string;
  type: string;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

const Field = forwardRef<HTMLInputElement, TypeInputPropsField>(
  ({ placeholder, type = "text", style, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);
export default Field;
