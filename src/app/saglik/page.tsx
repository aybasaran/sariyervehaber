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
            name: "Sağlık",
            href: "/sağlık",
          },
        ]}
      />
    </div>
  );
};

export default NewsPage;
