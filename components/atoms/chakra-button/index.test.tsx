import { render, screen } from "@testing-library/react";
import ChakraButton from ".";

test("checking chakra button", () => {
  render(<ChakraButton>mani</ChakraButton>);

  const textElement = screen.getByRole("button", {
    name: 'mani'
  })
  expect(textElement).toBeInTheDocument();
});
