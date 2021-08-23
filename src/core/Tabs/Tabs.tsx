import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TabOffer } from "./components/TabOffer";
import styles from "./Tabs.module.scss";

const Tabs = () => {
  const { search } = useLocation();
  const  history = useHistory();

  if (search === "") {
    return null;
  }

  const urlSearchParams = new URLSearchParams(search)
  const tab = urlSearchParams.get("tab");
  

  const onClose = () => {
    history.push(history.location.pathname)
  }

  return (
    <div
      className={styles.tabs}
    >
      <div className={styles.close} onClick={onClose}>
        X
      </div>
      {tab === "offer" && <TabOffer offerId={parseInt(urlSearchParams.get("id") ?? "", 10)}></TabOffer>}
    </div>
  );
}

export default Tabs