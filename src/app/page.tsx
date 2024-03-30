import AboutUsBlock from "./AboutUsBlock";

export default function App() {
  return (
    <div className="bg-blueprint-50">
      <div className="container space-y-5">
        <div className="flex rounded-lg bg-blueprint-100 px-5 py-2 font-bold text-xl">About Us 💡</div>
        <AboutUsBlock />
      </div>
    </div>
  );
}
