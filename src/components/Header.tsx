import { FC, useMemo } from "react";
import Icon from "./ui/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Social {
  name: keyof typeof dynamicIconImports;
  link: string;
}

const Header: FC = () => {
  const socials: Social[] = useMemo(
    () => [
      {
        name: "facebook",
        link: "https://www.facebook.com/",
      },
      {
        name: "twitter",
        link: "https://twitter.com/",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/",
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    []
  );

  const menuLinks = useMemo(
    () => [
      {
        name: "Siyaset",
        link: "/siyaset",
      },
      {
        name: "Gündem",
        link: "/gundem",
      },
      {
        name: "Yaşam",
        link: "/yasam",
      },
      {
        name: "Sağlık",
        link: "/saglik",
      },
      {
        name: "Kültür Sanat",
        link: "/kultur-sanat",
      },
      {
        name: "Eğitim",
        link: "/egitim",
      },
      {
        name: "Teknoloji",
        link: "/teknoloji",
      },
      {
        name: "Spor",
        link: "/spor",
      },
      {
        name: "Ekonomi",
        link: "/ekonomi",
      },
    ],
    []
  );

  return (
    <header>
      <div className="bg-neutral-900">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <Link href="/">
              <h3
                className={`${caveat.className} font-bold text-3xl text-white`}
              >
                Sarıyer & Haber
              </h3>
            </Link>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={social.name} color="#fff" size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav className="container">
          <ul className="flex w-full gap-4 py-3 overflow-auto snap-x">
            {menuLinks.map((menuLink) => (
              <li key={menuLink.name} className="snap-center shrink-0">
                <Link href={menuLink.link} className="text-lg hover:underline">
                  {menuLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
