import React from "react";
// import Header from "./components/Header";
import Banner from "./components/Banner";
import CarouselCom from "./components/CarouselCom";
import styles from "./index.module.scss";
import { Divider } from "antd";
const H5 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Banner />
        {/* <Divider style={{ borderColor: "#e2007f" }} /> */}
        <CarouselCom />
      </div>
    </div>
  );
};

export default React.memo(H5);
