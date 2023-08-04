import FlashNews from "@/components/FlashNews";
import LatestNewsHomeSlider from "@/components/LatestNewsHomeSlider";

const images = [
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/560-yil-once.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/sariyer-depreme-dayanikli-mi.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/sariyerde-kisi-basina-dusen-yesil-alan.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/sariyerin-yeni-baskani-ali-genc.webp",
];

export default async function Home() {
  return (
    <main className="bg-[#e9ecef] min-h-screen">
      <FlashNews />
      <LatestNewsHomeSlider images={images} />
    </main>
  );
}
