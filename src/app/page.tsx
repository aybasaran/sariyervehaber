import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import FlashNews from "@/components/FlashNews";
import LatestNewsHomeSlider from "@/components/LatestNewsHomeSlider";
import LastFourNews from "@/components/LastFourNews";
import HeadlinesHomeSlider from "@/components/HeadlinesHomeSlider";

import { Headline } from "@/types/headline";
import { Post } from "@/types/post";
import { Carousel } from "@/types/carousel";
import Latest20NewsHomeSlider from "@/components/Latest20NewsHomeSlider";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data: carousels } = (await supabase
    .from("carousel")
    .select(
      `
      image, 
      post ( 
        slug,
        category
      )
    `
    )
    .order("order", { ascending: true })) as any;

  const { data: headlines } = (await supabase.from("headline").select("*")) as {
    data: Headline[];
  };

  const { data: lastSportNews } = (await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("category", "spor")
    .limit(1)) as { data: Post[] };
  const { data: lastPoliticsNews } = (await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("category", "siyaset")
    .limit(1)) as { data: Post[] };
  const { data: lastGundemNews } = (await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("category", "gundem")
    .limit(1)) as { data: Post[] };
  const { data: LastMagazineNews } = (await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("category", "magazin")
    .limit(1)) as { data: Post[] };

  const { data: latest20Posts } = (await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20)) as {
    data: Post[];
  };

  const { data: randomDuoPosts } = (await supabase
    .from("random_post")
    .select("*")
    .limit(2)) as { data: Post[] };

  return (
    <main className="bg-[#e9ecef]">
      <div className="">
        <FlashNews />
        <LatestNewsHomeSlider carousels={carousels} />
        <LastFourNews
          newsList={[
            lastSportNews[0],
            lastPoliticsNews[0],
            lastGundemNews[0],
            LastMagazineNews[0],
          ]}
        />
        <Latest20NewsHomeSlider
          posts={latest20Posts}
          randomPosts={randomDuoPosts}
        />
        <HeadlinesHomeSlider headlines={headlines} />
      </div>
    </main>
  );
}
