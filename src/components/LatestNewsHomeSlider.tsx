"use client";

import { Carousel } from "@/types/carousel";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface LatestNewsHomeSliderProps {
  carousels: Carousel[];
}

const LatestNewsHomeSlider: FC<LatestNewsHomeSliderProps> = ({ carousels }) => {
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
        className="flex"
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        lazyPreloadPrevNext={1}
      >
        {carousels.map((carousel, index) => (
          <SwiperSlide key={index}>
            <Link href={`${carousel.post.category}/${carousel.post.slug}`}>
              <div className="relative h-40 md:h-72 lg:h-96">
                <Image
                  src={carousel.image}
                  alt=""
                  fill
                  priority={index === 0 ? true : false}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNewsHomeSlider;
