import Link from "next/link";
import { FC } from "react";

interface BreadcrumbProps {
  links: {
    name: string;
    href: string;
  }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  return (
    <div className="container my-4">
      <ul className="flex items-center gap-2 text-sm text-gray-400">
        {links.map((link, index) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
              {index !== links.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
