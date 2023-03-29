import React from "react";

const ShimmerProduct = () => {
  return (
    <div className="flex flex-col items-stretch py-8 gap-8 h-96 animate-pulse md:gap-36 mt-4 sm:flex-row px-8 ">
      <div className="min-w-[10rem] max-w-[30rem] h-40 bg-gray-300 m-auto sm:m-0"></div>
      <div className="flex flex-col justify-center gap-8 sm:justify-start">
        <div className="h-5 w-full bg-gray-300 sm:w-[40rem]"></div>
        <div className="h-12 w-full bg-gray-300 sm:w-[40rem]"></div>
        <div className="h-4 w-full bg-gray-300 sm:w-[40rem]"></div>
      </div>
    </div>
  );
};

export default ShimmerProduct;
