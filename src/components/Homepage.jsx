import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center px-8 py-4 gap-8 mt-10 sm:px-8">
      <Banner />
      <Link to="/products" data-testid="link">
        <button
          className="border border-purple-300 bg-purple-400 text-white p-4 rounded-md"
          data-testid="browse-btn"
        >
          Browse More Products
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
