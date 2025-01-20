import React from "react";
import styles from "./index.module.scss";

interface IProps {
  title: string;
  translateTitle?: string;
  subTitle?: string;
}
const Title: React.FC<IProps> = ({ title, translateTitle, subTitle }) => {
  const renderSubTitle = subTitle ? subTitle : translateTitle;
  return (
    <div className={styles.wrap}>
      <h2>{title}</h2>
      <span>{renderSubTitle}</span>
    </div>
  );
};

export default Title;
