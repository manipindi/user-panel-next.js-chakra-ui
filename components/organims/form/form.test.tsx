import { render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";
import { submitHandle } from "../../organims/form/index";
import ChakraButton from "@/components/atoms/chakra-button";
import { useRouter } from "next/router";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("checking form control", () => {
  test("checking form email in the dom", () => {
    render(<Form />);
    const emailControlElement = screen.getByLabelText(/Email address/i);
    expect(emailControlElement).toBeInTheDocument();
  });

  test("checking form password in the dom", () => {
    render(<Form />);
    const passwordElement = screen.getByLabelText(/Password/i);
    expect(passwordElement).toBeInTheDocument();
  });

  test("checking form submit button in the dom", async () => {
    const router = useRouter();
    let handler = submitHandle;
    handler = jest.fn();
    render(
      <ChakraButton
        onClick={() =>
          handler({ email: "mani@gmail.com", password: "mani@123" }, router)
        }
      >
        Submit
      </ChakraButton>
    );
    const submitBtn = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitBtn).toBeInTheDocument();

    await userEvent.click(submitBtn);

    expect(handler).toHaveBeenCalledTimes(1);

    expect(handler).toHaveBeenCalledWith(
      {
        email: "mani@gmail.com",
        password: "mani@123",
      },
      router
    );
  });
});
