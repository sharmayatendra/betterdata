import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../ProductCard";
import { PRODUCTS_DATA } from "../../mocks/mockData";

test("productCard should be load", () => {
  const productCard = render(<ProductCard {...PRODUCTS_DATA[0]} />);

  const product = productCard.getByTestId("product");

  expect(product).toBeInTheDocument();
});
