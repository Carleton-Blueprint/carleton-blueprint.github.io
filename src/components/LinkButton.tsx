import React from 'react';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  children: React.ReactNode;
  href: string;
  newTab?: boolean;
  variant?: 'filled' | 'ghost' | 'icon';
  className?: string; // tailwind classes
};

export default function LinkButton({ children, href, newTab = false, variant = 'filled', className = '' }: Props) {
  const mergedClassName = cx(
    'group flex w-fit items-center font-bold text-blueprint transition-colors ease-in-out duration-300 hover:text-blueprint-300',
    className,
  );

  if (variant === 'filled') {
    return (
      <Link
        href={href}
        target={`${newTab ? '_blank' : ''}`}
        rel={`${newTab ? 'noopener noreferrer' : ''}`}
        className={mergedClassName}
      >
        <button className="self-start rounded-full bg-blueprint px-5 py-2 text-white duration-300 ease-in-out hover:bg-blueprint-300">
          {children}
        </button>
      </Link>
    );
  }

  if (variant === 'ghost') {
    return (
      <Link
        href={href}
        target={`${newTab && '_blank'}`}
        rel={`${newTab && 'noopener noreferrer'}`}
        className={mergedClassName}
      >
        {children}
        <FaChevronRight className="ms-2 transition-all group-hover:ms-5" />
      </Link>
    );
  }

  if (variant === 'icon') {
    return (
      <Link
        href={href}
        target={`${newTab && '_blank'}`}
        rel={`${newTab && 'noopener noreferrer'}`}
        className={mergedClassName}
      >
        {children}
      </Link>
    );
  }
}
