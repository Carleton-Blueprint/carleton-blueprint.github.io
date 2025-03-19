import Link from 'next/link';
import { PageDataType } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';

export default function NavbarLinkItem({
  page,
  setOpen,
}: {
  page: PageDataType;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Link
      href={page.href}
      className="text-2xl text-white hover:text-blueprint-100 md:text-lg"
      onClick={setOpen ? () => setOpen(prev => !prev) : undefined}
    >
      {page.name}
    </Link>
  );
}
