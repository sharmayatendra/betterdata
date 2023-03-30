import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../Sidebar";
import { Provider } from "react-redux";
import { store } from "../../app/store";

test("sidebar should be load", () => {
  const sidebar = render(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );

  const side = sidebar.getByTestId("sidebar");

  expect(side).toBeInTheDocument();
});
