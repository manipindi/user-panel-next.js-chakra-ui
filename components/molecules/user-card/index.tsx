import PrimaryButton from "@/components/atoms/primary-button";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function UserCard({
  user,
  quickLookhandler,
  userImage,
  profileHanlder,
}: any) {
  return (
    <Card
      width={["340px", null, "540px", "340px"]}
      h="440px"
      bg={"#2C2F43"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <CardBody position={"relative"}>
          <Flex
            flexDirection={"column"}
            alignItems="center"
          >
            <Box
              w={"130px"}
              h="130px"
              bgGradient="linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)"
              borderRadius="50%"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Image
                src={userImage}
                w={"120px"}
                height={"120px"}
                alt="user-img"
                objectFit={"cover"}
                borderRadius="50%"
              />
            </Box>
            <Flex mt={5} flexDirection="column" alignItems={"center"}>
              <Text fontWeight={"semibold"} fontSize={"lg"}>
                {user.username}
              </Text>
              <Text fontSize={"sm"}>{user.email}</Text>
              <Text fontSize={"sm"} mt={4} textAlign="center">
                {user.company?.catchPhrase}
              </Text>
            </Flex>
          </Flex>
          <Box border={"0.5px solid gray"} w="100%" my={8} />

          <Box w={"100%"} display="flex" flexDirection={"column"} gap="10px">
            <PrimaryButton onClick={() => quickLookhandler(user)}>
              Quick Look
            </PrimaryButton>
            <PrimaryButton onClick={() => profileHanlder(user)}>
              See Profile
            </PrimaryButton>
          </Box>
      </CardBody>
    </Card>
  );
}
