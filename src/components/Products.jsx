import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../features/productSlice";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import Sidebar from "./Sidebar";

const Products = () => {
  const allProducts = useSelector((store) => store.product.products);
  const { selectedCategories, isLoading } = useSelector(
    (store) => store.product
  );
  const dispatch = useDispatch();

  const filteredProducts = allProducts?.filter((product) =>
    selectedCategories.includes(product.category)
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <section className="flex flex-col m-4 items-center gap-8 sm:flex-row sm:items-stretch">
      <Sidebar />
      <main className="flex flex-wrap items-stretch justify-center gap-10">
        {isLoading &&
          Array(20)
            .fill("")
            .map((_, index) => <Shimmer key={index} />)}
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard {...product} />
              </Link>
            ))
          : allProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard {...product} />
              </Link>
            ))}
      </main>
    </section>
  );
};

export default Products;
