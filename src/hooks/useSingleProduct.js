import { useEffect, useState } from "react";

const useSingleProduct = (productId) => {
  const [product, setProduct] = useState({});

  const getSingleProduct = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const jsonResp = await resp.json();
    setProduct(jsonResp);
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return product;
};

export default useSingleProduct;
