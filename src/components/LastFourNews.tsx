import Image from "next/image";
import { FC } from "react";
import { Post } from "@/types/post";
import Link from "next/link";

interface LastFourNewsProps {
  newsList: Post[];
}

const LastFourNews: FC<LastFourNewsProps> = ({ newsList }) => {
  return (
    <div className="container my-5">
      <div className="grid grid-cols-12 gap-5">
        {newsList.map((post, index) => (
          <div className="col-span-6 lg:col-span-3" key={index}>
            <Link href={`${post.category}/${post.slug}`}>
              <Image
                src={post.image}
                alt=""
                width={330}
                height={180}
                className="object-cover w-full"
              />
              <h4 className="text-lg lg:text-xl">{post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastFourNews;
