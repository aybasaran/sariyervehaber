import { FC } from "react";
import { Content } from "@/types/news";
import Image from "next/image";

interface NewsDetailProps {
  content: Content[];
}

const NewsDetail: FC<NewsDetailProps> = ({ content }) => {
  return (
    <div className="relative col-span-8 p-5 bg-white rounded">
      {content.map((item, index) => {
        if (item.type === "paragraph") {
          return (
            <p className="my-2 text-lg" key={index}>
              {item.body}
            </p>
          );
        } else if (item.type === "image") {
          return (
            <Image
              src={item.body as string}
              key={index}
              alt=""
              className="w-full h-auto"
              width={1024}
              height={768}
            />
          );
        } else if (item.type === "heading") {
          return (
            <h2 className="text-xl font-bold" key={index}>
              {item.body}
            </h2>
          );
        } else if (item.type === "list") {
          return (
            <ul key={index}>
              {(item.body as string[]).map((listItem, index) => {
                return <li key={index}>{listItem}</li>;
              })}
            </ul>
          );
        }
      })}
    </div>
  );
};

export default NewsDetail;
