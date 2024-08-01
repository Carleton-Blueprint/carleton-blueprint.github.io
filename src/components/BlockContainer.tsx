type Props = {
  children: React.ReactNode;
  title?: string;
  flip?: boolean;
  roundedCorners?: 'top' | 'bottom' | true | false;
  centered?: boolean;
  inner?: boolean;
  margin?: 'top' | 'bottom' | true | false;
  padding?: 'title only' | true | false;
  shadow?: boolean;
};

export default function BlockContainer({
  children,
  title,
  flip = false,
  roundedCorners = false,
  centered = false,
  inner = false,
  margin = false,
  padding = true,
  shadow = false,
}: Props) {
  return (
    <div
      className={`py-10
        ${flip ? 'bg-blueprint-50' : 'bg-white'}
        ${roundedCorners === true && 'rounded-[50px]'}
        ${roundedCorners === 'top' && 'rounded-t-[50px]'}
        ${roundedCorners === 'bottom' && 'rounded-b-[50px]'}
        ${inner && 'md:w-fit self-center md:px-10'}
        ${margin === true && 'my-12'}
        ${margin === 'top' && 'mt-12'}
        ${margin === 'bottom' && 'mb-12'}
        ${shadow === true && 'shadow-lg'}`}
    >
      <div
        className={`space-y-2 container
        ${centered && 'flex flex-col items-center'}`}
      >
        {title && (
          <div
            className={`flex text-blueprint py-2 font-bold text-4xl md:text-5xl
            ${centered && 'text-center'}`}
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
