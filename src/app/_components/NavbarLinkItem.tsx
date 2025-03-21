'use client';
import Link from 'next/link';
import { PageDataType } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function NavbarLinkItem({
  page,
  setOpen,
}: {
  page: PageDataType;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={page.href}
      className={cn('text-2xl text-white hover:text-blueprint-100 md:text-lg', {
        'md:-mx2 rounded-lg bg-white px-2 text-blueprint hover:text-blueprint-300': pathname === page.href,
      })}
      onClick={setOpen ? () => setOpen(prev => !prev) : undefined}
    >
      {page.name}
    </Link>
  );
}
