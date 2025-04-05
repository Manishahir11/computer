"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

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
      {/* <ul className="hidden xl:flex hover:text-default items-center gap-8">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/pro">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Nav;
