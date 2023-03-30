import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { store } from "./app/store";

test("should render app component on load of the application", () => {
  const app = render(
    <StaticRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
  const appDiv = app.getByTestId("app");

  expect(appDiv).toBeInTheDocument();
  
});
