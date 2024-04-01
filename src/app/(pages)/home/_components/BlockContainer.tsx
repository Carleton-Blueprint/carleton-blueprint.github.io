type Props = {
  children: React.ReactNode;
  title: string;
  flip?: boolean;
};

export default function BlockContainer({ children, title, flip = false }: Props) {
  return (
    <div className={`${flip && "bg-blueprint-50"} py-10`}>
      <div className="container space-y-5">
        <div className={`flex rounded-lg ${flip ? "bg-blueprint-100" : "bg-blueprint-50"} px-5 py-2 font-bold text-xl`}>{title}</div>
        {children}
      </div>
    </div>
  );
}
