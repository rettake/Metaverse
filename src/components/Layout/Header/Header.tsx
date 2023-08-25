import { useEthers } from "@usedapp/core";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  const { account, activateBrowserWallet } = useEthers();

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>LOGO</div>
      </Link>
      {account ? (
        <h4 className={styles.account}>{account}</h4>
      ) : (
        <Button onClick={() => activateBrowserWallet()}>
          Connect metamask
        </Button>
      )}
    </header>
  );
};

export default Header;
