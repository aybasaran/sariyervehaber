"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Post } from "@/types/post";

interface Props {
  posts: Post[];
  randomPosts: Post[];
}

const Latest20NewsHomeSlider: FC<Props> = ({ posts, randomPosts }) => {
  return (
    <div className="my-12">
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay
              loop
              className="h-full"
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <Link
                    href={`${post.category}/${post.slug}`}
                    className="relative "
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        height={503}
                        width={859}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    </div>
                    <div className="absolute flex flex-col items-start bottom-3 left-3">
                      <p className="p-2 text-white bg-black">
                        {post.category.toUpperCase()}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-col gap-3">
              {randomPosts.map((post) => (
                <Link href={`${post.category}/${post.slug}`} key={post.id}>
                  <div className="bg-white">
                    <Image
                      src={post.image}
                      alt={post.title}
                      height={247}
                      width={420}
                      className="object-cover w-full h-full"
                    />
                    <div className="px-2 py-4">
                      <h4 className="text-xl font-semibold">{post.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest20NewsHomeSlider;
