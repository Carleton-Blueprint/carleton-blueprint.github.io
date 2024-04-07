import React from "react";
import Image from "next/image";
import logo from "@/app/_assets/blueprint_banner_negative.png";
import Link from "next/link";
import { PageDataType, fetchPages } from "@/lib/contentful";
import { v4 as uuidv4 } from "uuid";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";


function MainLink() {
  return (
    <Link href="/">
      <div className="relative w-[150px]">
        <Image src={logo} alt="blueprint logo" />
      </div>
    </Link>
  );
}

function LinkItem({ page }: { page: PageDataType }) {
  return (
    <Link href={page.href} className="text-white hover:text-blueprint-100">
      {page.name}
    </Link>
  );
}

export default async function Navbar() {
  const res = await fetchPages();

  return (
    <div className="h-[80px] drop-shadow-2xl">
      <div className=" bg-blueprint h-[80px] flex fixed w-screen">
        <div className="container flex flex-row items-center justify-between">
          <MainLink />

          <div className="hidden sm:flex flex-row space-x-5">
            {res.map((page) => (
              <LinkItem key={uuidv4()} page={page} />
            ))}
          </div>
          <Sheet>
            <SheetTrigger className="block sm:hidden"><GiHamburgerMenu className="size-7 text-white"/></SheetTrigger>
            <SheetContent className="w-[250px] bg-blueprint text-2xl flex justify-center items-center">
              <SheetHeader className="h-4/5">
                <div className="h-3/6 flex flex-col justify-between">
                  {res.map((page) => (
                    <LinkItem key={uuidv4()} page={page} />
                    ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Blank space hidden under navbar */}
    </div>
  );
}
