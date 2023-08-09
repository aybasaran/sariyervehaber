import Breadcrumb from "@/components/Breadcrumb";
import LatestNewsSidebar from "@/components/LastestNewsSidebar";
import NewsDetail from "@/components/NewsDetail";
import Icon from "@/components/ui/Icon";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { News, NewsCategory } from "@/types/news";

dayjs.locale("tr");

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string; category: NewsCategory };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // supabase client
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("news").select("*").eq("slug", slug);

  if (!data || data.length === 0) {
    redirect("/");
  }

  return {
    title: data[0].title,
    description: data[0].description,
    keywords: ["Sarıyer", "Haber", "Yaşam", "Sarıyer Haber", "Sarıyer Yaşam"],
  };
}

const NewsPage = async ({
  params,
}: {
  params: { slug: string; category: NewsCategory };
}) => {
  const supabase = createServerComponentClient({ cookies });
  const { slug, category } = params;
  // subject and slug
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .eq("subject", category);

  if (!data || data.length === 0) {
    redirect("/");
  }

  return (
    <main>
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
      <div className="bg-gray-200">
        <div className="container py-5">
          <div className="grid grid-cols-12 gap-5">
            <NewsDetail content={data[0].content} />
            <LatestNewsSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
