import React from "react";
import Image from "next/image";
import logo from "./_assets/blueprint_banner_negative.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex bg-blueprint h-[100px] items-center">
      <div className="container">
        <Link href="/">
          <div className="relative w-[150px]">
            <Image src={logo} alt="blueprint logo" />
          </div>
        </Link>
      </div>
    </div>
  );
}
