"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-default text-[32px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold text-white">
              Karan<span className="text-accent">.</span>
            </h1>
          </Link>
          
        </div>
        <nav className="flex flex-col items-center justify-center gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  link.path === pathname && "text-white border-b-2 border-de"
                } Capitalize font-medium hover:text-default transition-all`}
              >
                <h1 className="text-3xl font-semibold">{link.name}</h1>
              </Link>
            ))}
          </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
