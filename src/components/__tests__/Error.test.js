import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "../Error";

test("should load error component", () => {
  const err = render(<Error />);

  const error = err.getByTestId("err");

  expect(error).toBeInTheDocument();
});
