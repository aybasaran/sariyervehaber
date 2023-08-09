import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { NewsCategory } from "@/types/post";
import Breadcrumb from "@/components/Breadcrumb";
import { redirect } from "next/navigation";

type Props = {
  params: { category: NewsCategory };
};

export default async function CategoryPage({
  params,
}: {
  params: { category: NewsCategory };
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("post")
    .select("*")
    .eq("category", params.category);

  if (!data || data.length === 0) {
    redirect("/");
  }

  return (
    <main>
      <Breadcrumb
        links={[
          { href: "/", name: "Anasayfa" },
          {
            href: `/${params.category}`,
            name: `${params.category.toUpperCase()}`,
          },
        ]}
      />
      <div className="container">
        <h1>Category Page</h1>
        <p>{data?.length} post found.</p>
      </div>
    </main>
  );
}
