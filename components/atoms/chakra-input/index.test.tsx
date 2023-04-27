import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChakraInput from ".";

test("checking chakra input", () => {
  render(
    <ChakraInput formvalue="manikanta pindi" placeholder={"Enter mail"} />
  );

  const inputEle = screen.getByPlaceholderText("Enter mail");

  fireEvent.change(inputEle, { target: { value: "mani" } });
  
  expect(inputEle).toHaveValue("mani");
});
