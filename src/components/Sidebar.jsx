import Checkbox from "./Checkbox";

const Sidebar = () => {
  return (
    <aside className="min-w-[12rem] sm:flex flex-col min-h-full border border-red-400 p-4">
      <h1 className="text-xl">Categories</h1>
      <ul className="p-2">
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </ul>
    </aside>
  );
};

export default Sidebar;
