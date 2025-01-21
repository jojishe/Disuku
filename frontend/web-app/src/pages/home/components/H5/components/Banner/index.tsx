import React from "react";
import styles from "./index.module.scss";
import { QM_URL } from "@src/constant";
const Banner = () => {
  return (
    <a href={QM_URL} className={styles.wrapper}>
      <h4 className={styles.title} data-aos="zoom-out-up">
        joji she
      </h4>
      <button data-aos="fade-up">Join us</button>
    </a>
  );
};

export default React.memo(Banner);
