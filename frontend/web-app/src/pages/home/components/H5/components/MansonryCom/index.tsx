import Masonry from "react-masonry-css";
import Title from "../Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import viewer from "@src/utils/viewer";
import FadeUp from "@src/components/FadeUp";
import "./index.scss";
const imgs = [
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/09e1bcdd-aef8-47ee-b4ea-2ad89375784d/1737433341589/temp2.jpg",
  // "https://openres.xfyun.cn/xfyundoc/2025-01-21/c99f276b-863e-483c-b446-219d62894d4c/1737433341593/temp3.jpg",
  // "https://openres.xfyun.cn/xfyundoc/2025-01-21/7a6483d1-1e7f-4df5-9a31-227997e886d9/1737433341590/temp6.jpg",
  // "https://openres.xfyun.cn/xfyundoc/2025-01-21/62cd1314-95fd-4f11-abf5-0ee0e3dc960a/1737433341592/temp4.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/eb777143-7e05-48e7-8f91-a6b83a1ef730/1737433341581/temp1.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/81603a77-0f94-45e8-910c-5742ef65e23f/1737433341590/temp5.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/c65c9b86-a185-4d84-8c0a-0367b7b53c6c/1737451766793/ff239851822de9d9443578af2c44ca77.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-21/005529cc-8ef5-4b8f-af31-4d1e0803bff9/1737451793921/b891c188dfd12b030a806cf94cb04b7b_720.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/c94fa034-f250-4d82-b01f-c18982f92265/1737531737328/MEITU_20241201_221927550%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/b81ae6a3-f7ba-49b1-886f-4af6fdddd814/1737531737334/Image_1728296924857%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/f5a44aaa-2dd6-4858-9793-32a7014a5e15/1737533333620/retouch_2024061718510786%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/c516af17-f771-4267-9ac0-9682e2871e84/1737533907608/Image_754242015924257.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/afeabceb-fb23-4eea-8ef4-68910e6ad8d6/1737533976326/0122_1%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/618a3d34-ee83-4413-ba0c-d42a762a6d7c/1737533976338/0122_2%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/ba8b6174-01f7-45a4-b82b-3fe2432f7e5d/1737534211814/retouch_2025012023134967%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/22e021ed-88cd-4499-b8fa-744b6d88fffd/1737534211808/freecompress-1737021666684.png",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/f3bdc75e-627d-43e9-8bf5-6bab5af18670/1737534259935/image0.jpeg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/7129b8a6-fcc2-45e4-8f51-32663360ee7e/1737534259935/image1.jpeg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/8d0ddc36-8089-42a6-afe2-e4ad9f698e31/1737534259927/image2.jpeg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/aeda44c0-77b2-437f-b6fb-467fe7b339ea/1737534335177/0122_1%20%282%29%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/c2b7b591-409d-404e-81c6-d83e984241db/1737534390215/Image_70312219863906.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/2b0233ff-4183-466a-bd90-33ddcd65d4c8/1737534490243/0122_2%20%282%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/a28b1bd0-9d4d-4198-9005-0b9d692ac23e/1737534586029/MEITU_20250122_024604636%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/f5923c52-7e59-48d7-be5d-7355ac1583d7/1737534586039/IMG_20241204_110215%20%281%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/adba5798-2d47-400f-9cea-db67600879b5/1737534767347/0122_2%20%283%29.jpg",
  "https://openres.xfyun.cn/xfyundoc/2025-01-22/0857db8b-b8f4-4c95-90de-c388be4146c6/1737534767360/0122_1%20%283%29.jpg",
];
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

const MansonryCom = () => {
  return (
    <FadeUp>
      <div className="mansonry-wrap">
        <Title title="Cosplay Pics" />
        <div className="mansonry-content">
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
        </div>
      </div>
    </FadeUp>
  );
};

export default MansonryCom;
