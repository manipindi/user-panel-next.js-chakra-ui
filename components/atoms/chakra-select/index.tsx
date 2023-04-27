import { Select } from "@chakra-ui/react";
import React, { ComponentPropsWithoutRef, useState } from "react";

type ChakraSelectProps = ComponentPropsWithoutRef<typeof Select>;

interface selectProps {
  selectedvalue?: string;
  changehandler?: (val: string) => void;
}

type WholeSelectProps = ChakraSelectProps & selectProps;

export default function ChakraSelect({ ...rest }: WholeSelectProps) {
  const [selectedState, setSelectedState] = useState(
    rest.selectedvalue ? rest.selectedvalue : ""
  );
  const changeHandler = (e: any) => {
    setSelectedState(e.target.value);
    if (rest && rest.changehandler) {
      rest.changehandler(e.target.value);
    }
  };

  return (
    <Select
      value={selectedState}
      onChange={changeHandler}
      placeholder="Select option"
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}
