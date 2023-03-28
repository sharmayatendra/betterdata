import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../features/productSlice";

const Checkbox = ({ category }) => {
  const dispatch = useDispatch();
  const { selectedCategories } = useSelector((store) => store.product);
  const isChecked = selectedCategories.includes(category);

  const handleChange = () => {
    dispatch(filterByCategory(category));
  };

  return (
    <div className="flex items-center mt-2">
      <input
        type="checkbox"
        value={category}
        id={category}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={category} className="ml-2 text-sm">
        {category}
      </label>
    </div>
  );
};

export default Checkbox;
