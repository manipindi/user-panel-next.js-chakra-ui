import { Input } from "@chakra-ui/react";
import React, { ComponentPropsWithoutRef, useState } from "react";

type inputProps = ComponentPropsWithoutRef<typeof Input>;

interface ChakraInputProps {
  formvalue?: string;
  type?: string;
}

type Props = ChakraInputProps & inputProps;

export default function ChakraInput({ ...rest }: Props) {
  const { type } = rest;
  return <Input type={type ? type : "text"} {...rest} />;
}
