import React from "react";
import styles from "./index.module.scss";
const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>jojishe</h4>
    </div>
  );
};

export default React.memo(Banner);
