import Breadcrumb from "@/components/Breadcrumb";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { News } from "@/types/news";
import Icon from "@/components/ui/Icon";
import dayjs from "dayjs";
import "dayjs/locale/tr";

dayjs.locale("tr");

const NewsPage = async ({ params }: { params: { slug: string } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { slug } = params;
  const { data } = await supabase.from("news").select("*").eq("slug", slug);

  if (!data || data.length === 0) {
    return <div>404</div>;
  }

  return (
    <div>
      <Breadcrumb
        links={[
          { href: "/", name: "Anasayfa" },
          {
            href: "/yasam",
            name: "Yaşam Haberleri",
          },
        ]}
      />
      <div className="container">
        <div>
          <h1 className="text-5xl font-bold">{data[0].title}</h1>
          <p className="text-xl">{data[0].description}</p>
        </div>
      </div>
      <div>
        <div className="py-2 bg-neutral-100">
          <div className="container">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center gap-1">
                <Icon name="user-circle" className="w-8 h-8" />
                <h3 className="text-lg">Admin</h3>
              </div>
              <div>
                <p>{dayjs(data[0].created_at).format("DD MMMM YYYY hh:mm")}</p>
                <p className="text-xs text-center">YAYINLANMA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
