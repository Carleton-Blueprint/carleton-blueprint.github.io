type Props = {
  children: React.ReactNode;
  title?: string;
  flip?: boolean;
  roundedBottom?: boolean;
  centered?: boolean;
};

export default function BlockContainer({
  children,
  title,
  flip = false,
  roundedBottom = false,
  centered = false,
}: Props) {
  return (
    <div
      className={`${flip && "bg-blueprint-50"} py-16 ${
        roundedBottom ? "rounded-b-[50px]" : "rounded-[50px]"
      }`}
    >
      <div
        className={`container space-y-12 ${
          centered && "flex flex-col items-center"
        }`}
      >
        {title ? (
          <div className={`flex text-blueprint py-2 font-bold text-6xl`}>
            {title}
          </div>
        ) : (
          <div></div>
        )}
        {children}
      </div>
    </div>
  );
}
