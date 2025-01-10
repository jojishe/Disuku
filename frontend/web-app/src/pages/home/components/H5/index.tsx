import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import styles from "./index.module.scss";
const H5 = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
    </div>
  );
};

export default React.memo(H5);
