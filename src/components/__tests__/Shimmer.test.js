import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shimmer from "../Shimmer";

test("shimmer should be load", () => {
  const shimmer = render(<Shimmer />);

  const shimmerUI = shimmer.getByTestId("shimmer");

  expect(shimmerUI).toBeInTheDocument();
});
