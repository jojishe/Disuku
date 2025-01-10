import React from "react";
import styles from "./index.module.scss";
const Banner = () => {
  return (
    <a href="https://qm.qq.com/q/mAjztLgZmE" className={styles.wrapper}>
      <h4 className={styles.title}>jojishe</h4>
    </a>
  );
};

export default React.memo(Banner);
