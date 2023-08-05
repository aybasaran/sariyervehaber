import { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";

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
            name: "Ekonomi",
            href: "/ekonomi",
          },
        ]}
      />
    </div>
  );
};

export default NewsPage;
