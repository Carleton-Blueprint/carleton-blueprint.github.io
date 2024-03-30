import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  newTab?: boolean;
};

export default function LinkButton({ children, href, newTab = false }: Props) {
  return (
    <Link href={href} target={`${newTab && "_blank"}`} rel={`${newTab && "noopener noreferrer"}`} className="flex">
      <button className="self-start text-white font-bold px-5 py-2 rounded-full bg-blueprint hover:bg-blueprint-300">{children}</button>
    </Link>
  );
}
