import Link from "next/link";
import { Button } from "@/components/ui/button";

import Nav from "../Nav";
import MobileNav from "../MobileNav";

const header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl mx-auto font-semibold">
            Manish<span className="text-default">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          {/* Desktop navbar */}
          <Nav></Nav>
          <Link href={"/contact"}>
            <Button variant="default" className="px-8 py-4">
              Hire me
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
