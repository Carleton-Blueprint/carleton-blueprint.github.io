'use client';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { IoMenu } from 'react-icons/io5';
import { PageDataType } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';
import NavbarLinkItem from './NavbarLinkItem';
import { useState } from 'react';

type PropType = {
  data: PageDataType[];
};

/*
  https://github.com/tailwindlabs/tailwindcss/discussions/3461
  Weird problem caused by PurgeCSS.
  <SheetTrigger className={`{breakpoint}:hidden`}> will not work as expected
*/
const styles = {
  sheetTrigger: {
    xs: 'xs:hidden',
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
  },
};

export default function NavbarMobile({ data }: PropType) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={styles.sheetTrigger['md']}>
        <IoMenu className="-pt-4 size-16 text-white" />
      </SheetTrigger>
      <SheetContent className="top-[75px] flex w-[250px] items-center justify-center bg-blueprint text-2xl">
        <SheetHeader className="h-4/5">
          <div className="flex h-3/6 flex-col justify-between">
            {data.map(page => (
              <NavbarLinkItem key={uuidv4()} page={page} setOpen={setOpen} />
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
