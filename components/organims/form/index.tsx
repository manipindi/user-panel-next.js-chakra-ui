import ChakraButton from "@/components/atoms/chakra-button";
import ChakraInput from "@/components/atoms/chakra-input";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export let submitHandle = (formData: any, router: any) => {
  let email = "mani@gmail.com";
  let password = "mani@123";
  if (formData && formData.email && formData.password) {
    if (formData.email === email && formData.password === password) {
      console.log(formData);

      router.replace("/home");
    }
  }
};

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitHandle(formData, router);
  };

  return (
    <form>
      <FormControl mb={"10px"}>
        <FormLabel>Email address</FormLabel>
        <ChakraInput
          value={formData.email}
          onChange={changeHandler}
          name="email"
          type="email"
          placeholder={"Enter your email"}
        />
      </FormControl>

      <FormControl mb={"20px"}>
        <FormLabel>Password</FormLabel>
        <ChakraInput
          value={formData.password}
          onChange={changeHandler}
          name="password"
          type="password"
          placeholder={"Enter your password"}
        />
      </FormControl>

      <FormControl>
        <ChakraButton
          type={"submit"}
          onClick={handleSubmit}
          colorScheme={"blue"}
        >
          Submit
        </ChakraButton>
      </FormControl>
    </form>
  );
}
