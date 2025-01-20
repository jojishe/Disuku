import React, { useEffect } from "react";
//@ts-ignore
import WOW from "wow.js";
import Banner from "./components/Banner";
import CarouselCom from "./components/CarouselCom";
import MansonryCom from "./components/MansonryCom";
import { Divider } from "antd";
import "animate.css";
import styles from "./index.module.scss";

const H5 = () => {
  useEffect(() => {
    if (WOW) {
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 0,
        mobile: true,
        live: false,
        scrollContainer: null,
      });
      if (wow) wow.init();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Banner />
        <CarouselCom />
        <Divider style={{ borderColor: "#e2007f" }} />
        <MansonryCom />
      </div>
    </div>
  );
};

export default React.memo(H5);
