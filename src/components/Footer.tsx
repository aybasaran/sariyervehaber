import { FC } from "react";
import { Caveat } from "next/font/google";
import Link from "next/link";
import Icon from "./ui/Icon";

const caveat = Caveat({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
});

const Footer: FC = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="grid grid-cols-12 py-5">
          <div className="flex flex-col col-span-5 gap-4">
            <h2 className={`${caveat.className} text-3xl font-bold`}>
              Sarıyer & Haber
            </h2>
            <p className="text-lg">
              Bu sitede yayınlanan tüm materyalin her hakkı mahfuzdur. Kaynak
              gösterilmeden alıntılanamaz.
            </p>
            <ul className="flex gap-1">
              <li className="p-2 border rounded-full border-facebook">
                <Link href="#">
                  <Icon name="facebook" className="text-facebook" />
                </Link>
              </li>
              <li className="p-2 border rounded-full border-instagram">
                <Link href="#">
                  <Icon name="instagram" className="text-instagram" />
                </Link>
              </li>
              <li className="p-2 border rounded-full border-youtube">
                <Link href="#">
                  <Icon name="youtube" className="text-youtube" />
                </Link>
              </li>
              <li className="p-2 border rounded-full border-twitter">
                <Link href="#">
                  <Icon name="twitter" className="text-twitter" />
                </Link>
              </li>
              <li className="p-2 border rounded-full border-linkedin">
                <Link href="#">
                  <Icon name="linkedin" className="text-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-7">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl">Sayfalar</h3>
              <div className="w-full h-[2px] bg-black" />
            </div>
            <ul className="list-disc list-inside">
              <li>
                <Link href="/siyaset" className="text-lg">
                  Siyaset
                </Link>
              </li>
              <li>
                <Link href="/gundem" className="text-lg">
                  Gündem
                </Link>
              </li>
              <li>
                <Link href="/yasam" className="text-lg">
                  Yaşam
                </Link>
              </li>
              <li>
                <Link href="/saglik" className="text-lg">
                  Sağlık
                </Link>
              </li>
              <li>
                <Link href="/kultur-sanat" className="text-lg">
                  Kültür Sanat
                </Link>
              </li>
              <li>
                <Link href="/egitim" className="text-lg">
                  Eğitim
                </Link>
              </li>
              <li>
                <Link href="/teknoloji" className="text-lg">
                  Teknoloji
                </Link>
              </li>
              <li>
                <Link href="/spor" className="text-lg">
                  Spor
                </Link>
              </li>
              <li>
                <Link href="/ekonomi" className="text-lg">
                  Ekonomi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 bg-neutral-800">
        <div className="container">
          <h3 className="text-lg text-center text-white">
            Copyright &copy; {new Date().getFullYear()}.Her Hakkı Saklıdır.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
