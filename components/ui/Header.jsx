import Link from "next/link";
import { Button } from "@/components/ui/button";

import Nav from "../Nav";
import MobileNav from "../MobileNav";

const header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="w-12 h-12">
           <img src="/logo.jpeg" alt="" />
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          {/* Desktop navbar */}
          <Nav />
          <Link href={"/cart"}>
            <Button variant="default" className="px-8 py-4">
              Cart
            </Button>
          </Link>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden"><MobileNav /></div>
      </div>
    </header>
  );
};

export default header;
