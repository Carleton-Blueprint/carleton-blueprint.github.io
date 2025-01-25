import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  className?: BlockContainerProps;
  children: React.ReactNode;
  title?: string;
  bg?: 'white' | 'light-blue' | 'dark-blue' | 'blueprint' | boolean;
  roundedCorners?: 'top' | 'bottom' | true | false;
  centered?: boolean;
  inner?: boolean;
  margin?: 'top' | 'bottom' | true | false;
  shadow?: boolean;
  padding?: 'less' | 'more' | boolean;
  gap?: 'less' | boolean;
  titleSize?: 'sm';
};

type BlockContainerProps = React.HTMLAttributes<HTMLDivElement> & string;

export default function BlockContainer({
  className,
  children,
  title,
  bg = 'white',
  roundedCorners = false,
  centered = false,
  inner = false,
  margin = false,
  shadow = false,
  padding = true,
  gap = true,
  titleSize = 'sm',
}: Props) {
  return (
    <div
      className={cn(className, {
        'py-16': padding,
        'py-8': padding === 'less',
        'bg-blueprint-50': bg === 'light-blue',
        'bg-white': bg === 'white',
        'bg-[#0A1E3A]': bg === 'dark-blue',
        'bg-blueprint': bg === 'blueprint',
        'rounded-[50px]': roundedCorners === true,
        'rounded-t-[50px]': roundedCorners === 'top',
        'rounded-b-[50px]': roundedCorners === 'bottom',
        'md:w-max self-center md:px-12': inner,
        'my-12': margin === true,
        'mt-12': margin === 'top',
        'mb-12': margin === 'bottom',
        'shadow-[2px_6px_4px_0_rgba(0,0,0,0.3)]': shadow,
      })}
    >
      <div
        className={cn('space-y-12 container', {
          'flex flex-col items-center': centered,
        })}
      >
        {title && (
          <div
            className={cn('flex text-blueprint py-2 font-bold text-5xl md:text-6xl', {
              'text-center': centered,
              'text-white': bg === 'dark-blue' || bg === 'blueprint',
            })}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
