"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Pagination
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useMemo, FC } from "react";

interface LatestNewsHomeSliderProps {
  images: string[];
}

const LatestNewsHomeSlider: FC<LatestNewsHomeSliderProps> = ({ images }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<a class="${className} flex-1 flex justify-center items-center cursor-pointer">${
        index + 1
      }</a>`;
    },
  };

  return (
    <div className="container latest-news-home-slider">
      <Swiper
        navigation={true}
        pagination={pagination}
        className="flex bg-red-300"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-40 md:h-72 lg:h-96">
              <Image src={image} alt="" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNewsHomeSlider;
