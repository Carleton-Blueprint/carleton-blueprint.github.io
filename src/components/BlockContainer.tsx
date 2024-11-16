type Props = {
  children: React.ReactNode;
  title?: string;
  flip?: 'white' | 'light-blue' | 'dark-blue' | 'blueprint' | boolean;
  roundedCorners?: 'top' | 'bottom' | true | false;
  centered?: boolean;
  inner?: boolean;
  margin?: 'top' | 'bottom' | true | false;
  shadow?: boolean;
};

export default function BlockContainer({
  children,
  title,
  flip = 'white',
  roundedCorners = false,
  centered = false,
  inner = false,
  margin = false,
  shadow = false,
}: Props) {
  return (
    <div
      className={`py-16
        ${flip === 'light-blue' && 'bg-blueprint-50'}
        ${flip === 'white' && 'bg-white'}
        ${flip === 'dark-blue' && 'bg-[#0A1E3A]'}
        ${flip === 'blueprint' && 'bg-blueprint'}
        ${roundedCorners === true && 'rounded-[50px]'}
        ${roundedCorners === 'top' && 'rounded-t-[50px]'}
        ${roundedCorners === 'bottom' && 'rounded-b-[50px]'}
        ${inner && 'md:w-max self-center md:px-12'}
        ${margin === true && 'my-12'}
        ${margin === 'top' && 'mt-12'}
        ${margin === 'bottom' && 'mb-12'}
        ${shadow && 'shadow-[2px_6px_4px_0_rgba(0,0,0,0.3)]'}`}
    >
      <div
        className={`space-y-12 container
        ${centered && 'flex flex-col items-center'}`}
      >
        {title && (
          <div
            className={`flex text-blueprint py-2 font-bold text-5xl md:text-6xl
            ${centered && 'text-center'}
            ${flip === 'dark-blue' || flip === 'blueprint' ? 'text-white' : 'text-blueprint'}`}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
