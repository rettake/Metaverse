import { useEthers } from "@usedapp/core";
import { FunctionComponent, useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";
import Typography from "../Typography/Typography";

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
          <Typography
            type="h2"
            color="#E75626"
            style={{ marginBottom: "29px" }}
          >
            metamask extention
          </Typography>
          <Typography
            type="p"
            color="#fff"
            style={{
              marginBottom: "50px",
              width: "320px",
              textAlign: "center",
            }}
          >
            To work with our application, you have to install the{" "}
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
              style={{
                color: "#E75626",
                textDecoration: "none",
              }}
            >
              Metamask browser extension
            </a>
          </Typography>
          <Button onClick={() => setShowModal(false)}>Skip this step</Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Modal;
