import React, { useEffect } from "react";
import Banner from "./components/Banner";
import CarouselCom from "./components/CarouselCom";
import MansonryCom from "./components/MansonryCom";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
// import { Divider } from "antd";
import Line from "./components/Line";
import AOS from "aos";
import { configResponsive, useResponsive } from "ahooks";

import "aos/dist/aos.css";
import "view-bigimg/lib/view-bigimg.css";
import styles from "./index.module.scss";

configResponsive({
  small: 0,
  middle: 750,
  large: 1200,
});

const H5 = () => {
  const responsive = useResponsive();
  const largStyle = responsive.middle ? { margin: "0 auto", maxWidth: "750px" } : {};
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wrapper} style={largStyle}>
      <div className={styles.content}>
        <Banner />
        <CarouselCom />
        <Line />
        <MansonryCom />
        <Line />
        <JoinUs />
        <Line />
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(H5);
