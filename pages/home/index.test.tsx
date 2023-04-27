import { render, screen } from "@testing-library/react";
import Homes from ".";

describe("checking home component", () => {
  test("checking home componentd", () => {
    render(<Homes />);
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeVisible();
  });
});
