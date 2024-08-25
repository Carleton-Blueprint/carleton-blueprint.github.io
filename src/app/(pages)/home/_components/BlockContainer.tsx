type Props = {
  children: React.ReactNode;
  title?: string;
  flip?: "white" | "light-blue" | "dark-blue" | boolean;
  roundedCorners?: "top" | "bottom" | true | false;
  centered?: boolean;
  inner?: boolean;
  margin?: "top" | "bottom" | true | false;
  padding?: "title only" | true | false;
};

export default function BlockContainer({
  children,
  title,
  flip = "white",
  roundedCorners = false,
  centered = false,
  inner = false,
  margin = false,
  padding = true,
}: Props) {
  return (
    <div
      className={`py-16
        ${flip === "light-blue" && "bg-blueprint-50"}
        ${flip === "white" && "bg-white"}
        ${flip === "dark-blue" && "bg-[#0A1E3A]"}
        ${roundedCorners === true && "rounded-[50px]"}
        ${roundedCorners === "top" && "rounded-t-[50px]"}
        ${roundedCorners === "bottom" && "rounded-b-[50px]"}
        ${inner && "md:w-[90%] self-center"}
        ${margin === true && "my-12"}
        ${margin === "top" && "mt-12"}
        ${margin === "bottom" && "mb-12"}
        `}
    >
      <div
        className={`space-y-12 
        ${centered && "flex flex-col items-center"}
        ${padding === true && "container"}`}
      >
        {title && (
          <div
            className={`flex text-blueprint py-2 font-bold text-center md:text-left text-5xl md:text-6xl
            ${padding === "title only" && !centered && "container"}
            ${centered && "md:text-center"}
            ${flip === "dark-blue" ? "text-white" : "text-blueprint"}
            `}

          >
            <h1 className="w-full">{title}</h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
