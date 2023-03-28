import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../features/productSlice";
import Checkbox from "./Checkbox";

const Sidebar = () => {
  const { categories } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return (
    <aside className="shadow-md rounded-md border border-gray-300 min-w-[12rem] sm:flex flex-col min-h-full p-4">
      <h1 className="text-xl font-semibold">Categories</h1>
      <ul className="p-2">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <Checkbox category={category} key={index} />
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
