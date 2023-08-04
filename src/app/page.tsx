import FlashNews from "@/components/FlashNews";
import LatestNewsHomeSlider from "@/components/LatestNewsHomeSlider";
import LastFourNews from "@/components/LastFourNews";
import HeadlinesHomeSlider from "@/components/HeadlinesHomeSlider";

const images = [
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/560-yil-once.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/sariyer-depreme-dayanikli-mi.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/sariyerde-kisi-basina-dusen-yesil-alan.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/home-carousel/sariyerin-yeni-baskani-ali-genc.webp",
];

const lastFourNews = [
  {
    title: "Sarıyer’de Murtaza Çelikel’e vefa",
    image:
      "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/news/sariyerde-murtaza-celikele-vefa-thumbnail.webp",
  },
  {
    title: "Vali Gül Sarıyerli muhtarlar ile bir araya geldi",
    image:
      "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/news/sariyer-muhtarlar-thumnail.webp",
  },
  {
    title: "Sarıyer’de deniz giren genç hayata tutunamadı",
    image:
      "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/news/sariyerde-denize-giren-genc-hayata-tutunamadi-thumbnail.webp",
  },
  {
    title: "Denizbank Sarıyer'deki dairesini satışa çıkardı",
    image:
      "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/news/deniz-bank-sariyer-daire-thumbnail.webp",
  },
];

const headlines = [
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/AKSAM.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/ANAYURT.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/AYDINLIK.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/BIRGUN.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/CUMHURIYET.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/DUNYA.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/DIRILIK-POSTASI.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/EVRENSEL.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/GUNBOYU.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/GUNES.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/KARAR.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/MILAT.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/MILLI-GAZETE.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/TURKGUN.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/TURKIYE.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENI-AKIT.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENI-ASYA.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENI-BIRLIK.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENI-MESAJ.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENI-SAFAK.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENI-SOZ-GAZETESI.webp",
  "https://jfqdoftnubeelcyqocls.supabase.co/storage/v1/object/public/sariyernews/headlines/YENICAG.webp",
];

export default async function Home() {
  return (
    <main className="bg-[#e9ecef] min-h-screen">
      <FlashNews />
      <LatestNewsHomeSlider images={images} />
      <LastFourNews news={lastFourNews} />
      <HeadlinesHomeSlider images={headlines} />
    </main>
  );
}
