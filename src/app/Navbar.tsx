import React from "react";
import Image from "next/image";
import logo from "./_assets/blueprint_banner_negative.png";
import Link from "next/link";
import { PageDataType, fetchPages } from "@/lib/contentful";
import { v4 as uuidv4 } from "uuid";

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
    <Link href={page.href} className="text-white">
      {page.name}
    </Link>
  );
}

export default async function Navbar() {
  const res = await fetchPages();

  return (
    <div className=" bg-blueprint h-[80px] flex">
      <div className="container flex flex-row items-center justify-between">
        <MainLink />

        <div className="flex flex-row space-x-5">
          {res.map((page) => (
            <LinkItem key={uuidv4()} page={page} />
          ))}
        </div>
      </div>
    </div>
  );
}
