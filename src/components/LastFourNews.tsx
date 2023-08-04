import Image from "next/image";
import { FC } from "react";

interface LastFourNewsProps {
  news: {
    title: string;
    image: string;
  }[];
}

const LastFourNews: FC<LastFourNewsProps> = ({ news }) => {
  return (
    <div className="container my-5">
      <div className="grid grid-cols-12 gap-5">
        {news.map((item, index) => (
          <div key={index} className="col-span-6 lg:col-span-3">
            <Image
              src={item.image}
              alt=""
              width={330}
              height={180}
              className="object-cover w-full"
            />
            <h4 className="text-lg lg:text-xl">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastFourNews;
