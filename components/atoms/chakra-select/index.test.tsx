import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChakraType from "@/pages/chakra-type";
import TimeoutComp from "../timeout-comp";
import ChakraSelect from ".";

const getElements = () => {
  const textElement = screen.queryByTestId("optionval");

  return {
    textElement,
  };
};

describe("chakra type", () => {
  test("checking chakra select", () => {
    const chakraType = render(<ChakraSelect />);
    // logRoles(chakraType.container)
    const selectElement: any = screen.getByRole("combobox");

    const option2 = screen.getByRole("option", {
      name: "Option 2",
    });

    // const { textElement } = getElements();

    // expect(textElement).not.toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: "option2" } });

    // const { textElement: textEl } = getElements();
    expect(selectElement.value).toBe("option2");
    // expect(textEl).toBeInTheDocument();
    // expect(textEl).toHaveTextContent(/Option2/i);

    fireEvent.change(selectElement, { target: { value: "" } });

    // expect(textEl).not.toBeInTheDocument();
    // expect(textEl).not.toBeVisible();
  });

  test.skip("testing using findby", async () => {
    render(<ChakraType />);
    const visibleElement = await screen.findByTestId("visiblecontent");
    expect(visibleElement).toBeInTheDocument();
  });
});
