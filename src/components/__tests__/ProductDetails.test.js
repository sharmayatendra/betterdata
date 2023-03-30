import { StaticRouter } from "react-router-dom/server";
import ProductDetails from "../ProductDetails";
import "@testing-library/jest-dom";
import { store } from "../../app/store";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { SINGLE_PRODUCT_DATA } from "../../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(SINGLE_PRODUCT_DATA),
  });
});

test("individual product should load", async () => {
  const productDetails = render(
    <StaticRouter>
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(productDetails.getByTestId("details")));

  const product = productDetails.getByTestId("details");

  expect(product).toBeInTheDocument();
});
