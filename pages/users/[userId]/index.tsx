import PrimaryButton from "@/components/atoms/primary-button";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { userImages } from "..";

export default function UserId({ userData }: any) {
  const router = useRouter();

  const goBackHandler = () => {
    router.push("/users");
  };

  if(router.isFallback){
    return <Box w={"100vw"} h={"100vh"} color={"black"} bg={"white"}>Loading....</Box>
  }

  return (
    <>
      {userData && (
        <Flex h={"100vh"} justifyContent={"center"} alignItems="center">
          <Box
            w={"90%"}
            h={["90%", null, "60%", null, "90%"]}
            bg={"#2C2F43"}
            borderRadius={"lg"}
          >
            <Box display={"flex"} flexDir="column" h={"100%"} padding="16px">
              <Box
                w={"100%"}
                // h="220px"
                display={"flex"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w={["130px", null, null, null, "180px"]}
                  height={["130px", null, null, null, "180px"]}
                  bg={"red"}
                  borderRadius="full"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  bgGradient="linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)"
                >
                  <Image
                    w={["120px", null, null, null, "170px"]}
                    height={["120px", null, null, null, "170px"]}
                    objectFit={"cover"}
                    borderRadius="full"
                    src={userImages?.[userData?.id - 1]}
                    alt="userImage"
                  />
                </Box>
              </Box>
              <Flex
                flexDir={"column"}
                alignItems={"center"}
                mt={["10px", null, "30px"]}
                flex={"1"}
                gap={["20px", null, "50px", "20px", null, "30px"]}
                fontSize={["12px", null, "16px"]}
              >
                <Flex flexDir={"column"} alignItems={"center"} gap="6px">
                  <Text fontWeight={"bold"} fontSize="xl">
                    {userData?.name}
                  </Text>
                  <Text fontSize={"sm"} color="#d9d9d9">
                    {userData?.email}
                  </Text>
                  <Text fontSize={"sm"} color="#d9d9d9">
                    Los Angeles, United States 🇺🇸
                  </Text>
                </Flex>

                <Flex flexDir={"column"} alignItems={"center"} gap="6px">
                  <Text>Solution Manager - Creative Tim Officer</Text>
                  <Text>University of Computer Science</Text>
                </Flex>

                <Flex w={["80%", null, "50%"]} textAlign="center">
                  <Text>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </Text>
                </Flex>

                <PrimaryButton
                  size={["md", null, "lg"]}
                  mt={[null, null, null, null, null, "6"]}
                  onClick={goBackHandler}
                  w="auto"
                >
                  GO Back
                </PrimaryButton>

                <Box
                  w="90%"
                  mt={"auto"}
                  display="flex"
                  flexDir={"column"}
                  alignItems="center"
                >
                  <Box border={"1px solid gray"} w="100%"></Box>
                  <Box marginTop={"20px"}>
                    <Text textAlign={"center"}>
                      {userData?.company?.bs}. {userData?.company?.catchPhrase}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  let response;
  try {
    const userResponse: any = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
    );
    response = userResponse.data;
  } catch (err) {
    response = null;
  }

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userData: response,
    },
  };
};
