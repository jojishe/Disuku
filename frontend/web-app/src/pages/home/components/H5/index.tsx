import React, { useEffect } from "react";
import Banner from "./components/Banner";
import CarouselCom from "./components/CarouselCom";
import MansonryCom from "./components/MansonryCom";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import { Divider } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import "view-bigimg/lib/view-bigimg.css";
import styles from "./index.module.scss";

const H5 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Banner />
        <CarouselCom />
        <Divider style={{ borderColor: "#e2007f", margin: "2.5rem 0" }} />
        <MansonryCom />
        <Divider style={{ borderColor: "#e2007f", margin: "2.5rem 0" }} />
        <JoinUs />
        <Divider style={{ borderColor: "#e2007f", margin: "2.5rem 0" }} />
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(H5);
