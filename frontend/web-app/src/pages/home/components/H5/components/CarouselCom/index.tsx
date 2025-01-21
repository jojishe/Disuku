import React from "react";
import { Carousel } from "antd";
import Title from "../Title";
import viewer from "@src/utils/viewer";
import Jo1 from "@assets/home/jo1.jpg";
import Jo2 from "@assets/home/jo2.jpg";
import Jo3 from "@assets/home/jo3.jpg";

const jojoImgs = [Jo1, Jo2, Jo3];
const contentStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  borderRadius: "8px",
};

const CarouselCom: React.FC = () => {
  return (
    <>
      <Title title="Like" />
      <Carousel autoplay infinite>
        {jojoImgs.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" style={contentStyle} onClick={() => viewer.show(item)} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselCom;
