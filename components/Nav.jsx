"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Custom", path: "/custom" },
  { name: "Sale", path: "/sale" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`${
            link.path === pathname && "text-default border-b-2 border-de"
          } Capitalize font-medium hover:text-default transition-all`}
        >
          <h1 className="text-lg font-semibold">{link.name}</h1>
        </Link>
      ))}
      
    </nav>
  );
};

export default Nav;
