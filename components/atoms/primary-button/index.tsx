import { Button } from "@chakra-ui/react";
import React from "react";

export default function PrimaryButton({ children, ...rest }: any) {
  return (
    <Button
      w={"100%"}
      bg="blue.600"
      _hover={{ bg: "blue.500" }}
      _active={{ bg: "blue.700" }}
      {...rest}
    >
      {children}
    </Button>
  );
}
