import { FunctionComponent } from "react";
import styles from "./Typography.module.css";

interface ITypographyProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "p_additional";
  children: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
}

const Typography: FunctionComponent<ITypographyProps> = ({
  children,
  type,
  color,
  style, // Опциональный пропс на тот случай, если придется передать какие-то уникальные стили
}) => {
  switch (type) {
    case "h1":
      return (
        <h1 className={styles.h1} style={{ ...style, color: `${color}` }}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={styles.h2} style={{ ...style, color: `${color}` }}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={styles.h3} style={{ ...style, color: `${color}` }}>
          {children}
        </h3>
      );

    case "h4":
      return (
        <h4 className={styles.h4} style={{ ...style, color: `${color}` }}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={styles.h5} style={{ ...style, color: `${color}` }}>
          {children}
        </h5>
      );

    case "p":
      return (
        <p className={styles.p} style={{ ...style, color: `${color}` }}>
          {children}
        </p>
      );
    
    case "p_additional":
      return (
        <p className={styles.p_additional} style={{ ...style, color: `${color}` }}>
          {children}
        </p>
      )
  }
};

export default Typography;
