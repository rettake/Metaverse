import { useEthers } from "@usedapp/core";
import { Link } from "react-router-dom";
import Button from "../../../shared/UI/Button/Button";
import styles from "./Header.module.css";
import Typography from "../../../shared/UI/Typography/Typography";

const Header = () => {
  const { account, activateBrowserWallet } = useEthers();

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <Typography type='h5' color='#fff'>LOGO</Typography>
        </div>
      </Link>
      {account ? (
        <Typography type="h5" color='#E75626'>
          {account}
        </Typography>
        // <h4 className={styles.account}>{account}</h4>
      ) : (
        <Button onClick={() => activateBrowserWallet()}>
          Connect metamask
        </Button>
      )}
    </header>
  );
};

export default Header;
