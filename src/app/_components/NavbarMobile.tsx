import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { PageDataType } from "@/lib/contentful";
import { v4 as uuidv4 } from "uuid";
import NavbarLinkItem from "./NavbarLinkItem";
import { NAV_BREAKPOINT } from "./Navbar";

export default function NavbarMobile({ data }: { data: PageDataType[] }) {
  return (
    <Sheet>
      <SheetTrigger className={`block ${NAV_BREAKPOINT}:hidden`}>
        <GiHamburgerMenu className="size-7 text-white" />
      </SheetTrigger>
      <SheetContent className="w-[250px] bg-blueprint text-2xl flex justify-center items-center">
        <SheetHeader className="h-4/5">
          <div className="h-3/6 flex flex-col justify-between">
            {data.map((page) => (
              <NavbarLinkItem key={uuidv4()} page={page} />
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
