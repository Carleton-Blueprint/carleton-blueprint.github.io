import React from "react";
import Image from "next/image";
import logo from "@/app/_assets/blueprint_banner_negative.png";
import Link from "next/link";
import { fetchPages } from "@/lib/contentful";
import { v4 as uuidv4 } from "uuid";
import NavbarMobile from "./NavbarMobile";
import NavbarLinkItem from "./NavbarLinkItem";

const NAV_BREAKPOINT = "md";

function MainLink() {
  return (
    <Link href="/">
      <div className="relative w-[150px]">
        <Image src={logo} alt="blueprint logo" />
      </div>
    </Link>
  );
}

export default async function Navbar() {
  const res = await fetchPages();

  return (
    <div className="h-[80px]">
      <div className=" bg-blueprint h-[80px] flex fixed w-screen">
        <div className="container flex flex-row items-center justify-between">
          <MainLink />

          <div className={`hidden ${NAV_BREAKPOINT}:flex flex-row space-x-5`}>
            {res.map((page) => (
              <NavbarLinkItem key={uuidv4()} page={page} />
            ))}
          </div>

          <NavbarMobile data={res} breakpoint={NAV_BREAKPOINT} />
        </div>
      </div>

      {/* Blank space hidden under navbar */}
    </div>
  );
}
