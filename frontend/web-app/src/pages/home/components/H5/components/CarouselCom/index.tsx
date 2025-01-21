import React from "react";
import { Carousel } from "antd";
import Title from "../Title";
import viewer from "@src/utils/viewer";

const jojoImgs = [
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/f9e76ecb-bd15-41e1-b5b9-bb89c9409d8e/1737451413158/jo1.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/87925d89-5fb4-47ae-a718-20e08848b7a1/1737451413185/jo2.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/10c9b309-4d21-4b68-8f26-e34114a9f641/1737451413186/jo3.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/fb192e89-4bbf-4891-8908-b4b1cbcf5383/1737451372474/4%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/40616ab2-6b94-4e0f-be10-1fc4d9230713/1737451385621/5.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/3bb7cd63-9888-48d6-b029-74174801d68b/1737451372451/6%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/87b5aeba-7234-4a2d-9fd6-c6d2c2a4d13e/1737451372473/7%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/eefc3b11-9210-4b64-b48f-ed41be6992d8/1737451515911/8.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/dc655669-573c-4fff-8675-d50a11af1d58/1737451515915/9.jpg",
];
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
