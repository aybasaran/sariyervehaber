"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Headline } from "@/types/headline";

interface HeadlinesHomeSliderProps {
  headlines: Headline[];
}

const HeadlinesHomeSlider: FC<HeadlinesHomeSliderProps> = ({ headlines }) => {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="container bg-white">
      <div className="p-4">
        <div className="flex items-center gap-4 py-5">
          <h2 className="text-xl">Gazete Manşetleri</h2>
          <div className="flex-1 h-[3px] bg-black" />
        </div>
        <div className="headlines-home-slider">
          <Swiper
            slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination]}
            pagination={pagination}
            autoplay
            className="flex"
            spaceBetween={10}
            lazyPreloadPrevNext={2}
            loop
          >
            {headlines.map((headline, index) => (
              <SwiperSlide key={index}>
                <Link href={headline.image} target="_blank">
                  <Image
                    src={headline.image}
                    alt={headline.newspaper_name}
                    height={300}
                    width={200}
                    className="object-cover w-full"
                    priority={index <= 5 ? true : false}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeadlinesHomeSlider;
