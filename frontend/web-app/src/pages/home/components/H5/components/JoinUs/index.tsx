import React from "react";
import Title from "../Title";
import viewer from "@src/utils/viewer";
import styles from "./index.module.scss";

const imgs = [
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/ab1cbc5e-4921-4669-b631-943116694293/1737442993890/d0698fea12328b670f8883fba0c57da.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/f9e758b8-0e07-45e2-b4cf-796a37a3f49f/1737443000392/bf51241d1c2e2b817e3cc5a9fcfeffb.jpg",
];
const JoinUs: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <Title title="Join us" />
      <p>
        我们是<span style={{ color: "#e2007f" }}>JO极社</span>
        <br />
        这里，有一群志同道合的同伴
        <br />
        加入我们吧，让我们一起用我们的
        <span style={{ color: "yellow" }}>【正义】</span>和<span style={{ color: "#e2007f" }}>【热情】</span>
        <br />
        度过我们的<span style={{ color: "yellow" }}>【黄金岁月】</span>
      </p>
      <div className={styles.imgs}>
        {imgs.map((img, index) => (
          <img key={index} src={img} alt="join us" onClick={() => viewer.show(img)} />
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
