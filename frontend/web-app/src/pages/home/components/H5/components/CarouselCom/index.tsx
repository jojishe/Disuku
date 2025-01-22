import React from "react";
import { Carousel } from "antd";
// import { useRequest } from "ahooks";
// import { fetchGet } from "@src/utils/fetch";
import { JOJO_IMG_BACKUP } from "@src/constant";
import Title from "../Title";
import viewer from "@src/utils/viewer";
import FadeUp from "@src/components/FadeUp";
import styles from "./index.module.scss";

const contentStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  borderRadius: "8px",
};

const CarouselCom: React.FC = () => {
  // const { data, mutate } = useRequest(() => fetchGet("jojoimgs"), {
  //   onError() {
  //     console.error("jojoimgs error，使用MANSONRY_BACKUP");
  //     mutate({ data: JOJO_IMG_BACKUP });
  //     // Handle error appropriately
  //   },
  //   onSuccess(data) {
  //     console.log("jojoimgs data ", data);
  //   },
  // });
  return (
    <FadeUp>
      <div className={styles.wrap}>
        <Title title="Like" />
        <Carousel autoplay infinite>
          {JOJO_IMG_BACKUP.map((item: string, index: number) => (
            <div key={index}>
              <img src={item} alt="" style={contentStyle} onClick={() => viewer.show(item)} />
            </div>
          ))}
        </Carousel>
      </div>
    </FadeUp>
  );
};

export default CarouselCom;
