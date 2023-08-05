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
            name: "Gündem",
            href: "/gundem",
          },
        ]}
      />
    </div>
  );
};

export default NewsPage;
