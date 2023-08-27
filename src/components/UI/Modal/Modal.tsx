import { useEthers } from "@usedapp/core";
import { FunctionComponent, useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal: FunctionComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { account } = useEthers();

  useEffect(() => {
    if (!account) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [account]);

  return (
    <div className={showModal ? styles.outer : styles.hidden}>
      {showModal ? (
        <div className={styles.inner}>
          <h2 className={styles.title}>metamask extention</h2>
          <p className={styles.text}>
            To work with our application, you have to install the{" "}
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
              className={styles.link}
            >
              Metamask browser extension
            </a>
          </p>
          <Button onClick={() => setShowModal(false)}>Skip this step</Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Modal;
