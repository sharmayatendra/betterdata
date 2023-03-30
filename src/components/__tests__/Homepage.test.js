import { render } from "@testing-library/react";
import Homepage from "../Homepage";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { store } from "../../app/store";

test("browse more button should be present on rendering homepage", () => {
  const homePage = render(
    <StaticRouter>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </StaticRouter>
  );
  const browseBtn = homePage.getByTestId("browse-btn");

  expect(browseBtn.innerHTML).toBe("Browse More Products");
});
