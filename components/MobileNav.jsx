"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet,SheetContent,SheetTrigger } from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci"


const links = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-default text-[32px]" />
      </SheetTrigger>
      <SheetContent>
        contains
      </SheetContent>
    </Sheet>
    
  )
}

export default MobileNav
