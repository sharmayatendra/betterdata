import { render } from "@testing-library/react";
import Homepage from "../Homepage";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { store } from "../../app/store";

test("on click of browse more button it should go to product listing page", () => {
  // load Homepage:
  const homePage = render(
    <StaticRouter>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </StaticRouter>
  );
  console.log(homePage);
});
