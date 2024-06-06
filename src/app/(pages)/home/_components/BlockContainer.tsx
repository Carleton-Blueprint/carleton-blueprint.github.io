type Props = {
  children: React.ReactNode;
  title?: string;
  flip?: boolean;
  roundedBottom?: boolean;
  centered?: boolean;
  inner?: boolean;
};

export default function BlockContainer({
  children,
  title,
  flip = false,
  roundedBottom = false,
  centered = false,
  inner = false,
}: Props) {
  return (
    <div
      className={`py-16
        ${flip && "bg-blueprint-50"}
        ${roundedBottom ? "rounded-b-[50px]" : "rounded-[50px]"}
        ${inner && "w-[90%] self-center"}`}
    >
      <div
        className={`container space-y-12 ${
          centered && "flex flex-col items-center"
        }`}
      >
        {title ? (
          <div
            className={`flex text-blueprint py-2 font-bold text-5xl md:text-6xl`}
          >
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
