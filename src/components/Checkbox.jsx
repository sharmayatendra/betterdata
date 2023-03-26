import React from "react";

const Checkbox = () => {
  return (
    <div className="flex items-center mt-2">
      <input type="checkbox" value="electronics" id="check" />
      <label htmlFor="check" className="ml-2 text-sm">
        Electonics
      </label>
    </div>
  );
};

export default Checkbox;
