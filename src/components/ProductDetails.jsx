import React from "react";
import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import ShimmerProduct from "./ShimmerProduct";

const ProductDetails = () => {
  const { id } = useParams();

  const { image, title, description, price } = useSingleProduct(id);

  return (
    <>
      {description ? (
        <div className="flex flex-col items-stretch py-8 gap-8 md:gap-36 mt-4 sm:flex-row px-8">
          <div className="min-w-[10rem] max-w-[20rem] m-auto sm:m-0">
            <img src={image} alt="product-img" className="w-full" />
          </div>
          <div>
            <h1 className="text-sm font-bold sm:text-xl md:text-2xl">
              {title}
            </h1>
            <div className="max-w-[30rem]">
              <p className="text-sm sm:text-md text-gray-500 mt-4">
                {description}
              </p>
              <p className="font-bold text-xl mt-6">
                <span className="text-gray-500">Price</span>: ₹{price}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ShimmerProduct />
      )}
    </>
  );
};

export default ProductDetails;
