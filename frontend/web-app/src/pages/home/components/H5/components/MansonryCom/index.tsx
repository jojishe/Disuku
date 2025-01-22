import Masonry from "react-masonry-css";
import { useRequest } from "ahooks";
import { fetchGet } from "@src/utils/fetch";
import Title from "../Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import viewer from "@src/utils/viewer";
import FadeUp from "@src/components/FadeUp";
import { MANSONRY_BACKUP } from "@src/constant";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.scss";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2,
};

const MansonryCom = () => {
  const { data, mutate } = useRequest(() => fetchGet("mansonry"), {
    onError() {
      console.error("mansonry error，使用MANSONRY_BACKUP");
      mutate({ data: MANSONRY_BACKUP });
      // Handle error appropriately
    },
    onSuccess(data) {
      console.log("mansonry data ", data);
    },
  });
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
            {data?.data?.map((item: string, index: number) => (
              <div key={index}>
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.3s" },
                  }}
                  src={item}
                  alt={`Image ${index + 1}`}
                  onClick={() => viewer.show(item)}
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </FadeUp>
  );
};

export default MansonryCom;
