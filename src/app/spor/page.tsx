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
            name: "Spor",
            href: "/spor",
          },
        ]}
      />
    </div>
  );
};

export default NewsPage;
