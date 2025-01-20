import React from "react";
import Masonry from "react-masonry-css";
import Title from "../Title";
import { Image } from "antd";
import temp1 from "./temp1.jpg";
import temp2 from "./temp2.jpg";
import temp3 from "./temp3.jpg";
import temp4 from "./temp4.jpg";
import temp5 from "./temp5.jpg";
import temp6 from "./temp6.jpg";
// import styles from "./index.module.scss";
import "./index.scss";

const imgs = [temp1, temp2, temp3, temp4, temp5, temp6];
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

const MansonryCom = () => {
  return (
    <>
      <Title title="Cosplay Pics" />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imgs.map((item, index) => (
          <div key={index}>
            <Image src={item} alt="" />
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default React.memo(MansonryCom);
