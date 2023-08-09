"use client";

import { FC, useEffect, useMemo, useState } from "react";
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

const socials: Social[] = [
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
];

const menuLinks = [
  {
    name: "SİYASET",
    link: "/siyaset",
  },
  {
    name: "YAŞAM",
    link: "/yasam",
  },
  {
    name: "SAĞLIK",
    link: "/saglik",
  },
  {
    name: "EĞİTİM",
    link: "/egitim",
  },
  {
    name: "SPOR",
    link: "/spor",
  },
  {
    name: "EMLAK",
    link: "/emlak",
  },
  {
    name: "KÜLTÜR SANAT",
    link: "/kultur-sanat",
  },
  {
    name: "SARIYER HABERLERİ",
    link: "/sariyer-haberleri",
  },
  {
    name: "SEKTÖR",
    link: "/sektor",
  },
];

const Header: FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {showLogo && (
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
      )}
      <div className="bg-white shadow">
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
