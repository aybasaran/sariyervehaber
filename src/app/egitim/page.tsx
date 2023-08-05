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
            name: "Eğitim",
            href: "/egitim",
          },
        ]}
      />
    </div>
  );
};

export default NewsPage;
