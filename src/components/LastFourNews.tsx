import Image from "next/image";
import { FC } from "react";
import { News } from "@/types/news";
import Link from "next/link";

interface LastFourNewsProps {
  newsList: News[];
}

const LastFourNews: FC<LastFourNewsProps> = ({ newsList }) => {
  return (
    <div className="container my-5">
      <div className="grid grid-cols-12 gap-5">
        {newsList.map((news, index) => (
          <div className="col-span-6 lg:col-span-3" key={index}>
            <Link href={`${news.slug}`}>
              <Image
                src={news.image}
                alt=""
                width={330}
                height={180}
                className="object-cover w-full"
              />
              <h4 className="text-lg lg:text-xl">{news.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastFourNews;
