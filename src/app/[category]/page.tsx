import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { NewsCategory } from "@/types/post";

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

  return (
    <div>
      <div className="container">
        <h1>Category Page</h1>
        <p>{data?.length} post found.</p>
      </div>
    </div>
  );
}
