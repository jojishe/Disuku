import React from "react";
import { Carousel } from "antd";
import Title from "../Title";
const contentStyle: React.CSSProperties = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselCom: React.FC = () => (
  <>
    <Title title="Historical" />
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </>
);

export default CarouselCom;
