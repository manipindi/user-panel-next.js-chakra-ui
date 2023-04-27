import ChakraButton from "@/components/atoms/chakra-button";
import ChakraInput from "@/components/atoms/chakra-input";
import ChakraSelect from "@/components/atoms/chakra-select";
import TimeoutComp from "@/components/atoms/timeout-comp";
import Form from "@/components/organims/form";
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export default function ChakraType() {
  const [state, setState] = useState("");

  const changehandler = (val: string) => {
    setState(val);
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      {/* <ChakraInput variant={"outline"} placeholder={"Enter Email"} />
      <ChakraButton>Click Me</ChakraButton>
       <ChakraSelect changehandler={changehandler} selectedvalue={state} />

      {state && <span data-testid="optionval">{state}</span>}

      <TimeoutComp /> */}

      <Box w={700} mt={100}>
        <Form />
      </Box>
    </Flex>
  );
}
