import Breadcrumb from "@/components/Breadcrumb";
import { FC } from "react";

const NewsPage: FC = () => {
  return (
    <div>
      <Breadcrumb
        links={[
          {
            name: "Ana Sayfa",
            href: "/",
          },
          {
            name: "Teknoloji",
            href: "/teknoloji",
          },
        ]}
      />
    </div>
  );
};

export default NewsPage;
