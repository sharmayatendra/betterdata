import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import "@testing-library/jest-dom";
import Checkbox from "../Checkbox";

test("checkbox should be load", () => {
  const checkbox = render(
    <Provider store={store}>
      <Checkbox category={"electronics"} />
    </Provider>
  );

  const input = checkbox.getByTestId("check");

  expect(input).toBeInTheDocument();
});
