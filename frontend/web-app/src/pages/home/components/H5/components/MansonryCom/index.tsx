
import Masonry from "react-masonry-css";
import Title from "../Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import viewer from "@src/utils/viewer";
import "./index.scss";
const imgs = [
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/09e1bcdd-aef8-47ee-b4ea-2ad89375784d/1737433341589/temp2.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/c99f276b-863e-483c-b446-219d62894d4c/1737433341593/temp3.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/7a6483d1-1e7f-4df5-9a31-227997e886d9/1737433341590/temp6.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/62cd1314-95fd-4f11-abf5-0ee0e3dc960a/1737433341592/temp4.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/eb777143-7e05-48e7-8f91-a6b83a1ef730/1737433341581/temp1.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/81603a77-0f94-45e8-910c-5742ef65e23f/1737433341590/temp5.jpg",
];
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
            <LazyLoadImage src={item} alt={`Image ${index + 1}`} onClick={() => viewer.show(item)} />
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default MansonryCom;
