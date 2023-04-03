import { activeUserAtom } from "@/recoil/atoms/active-user";
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import styles from "./user-modal.module.css";

export default function UserModal({
  isOpen,
  closeModalHanlder,
  userImage,
}: any) {
  const activeUser: any = useRecoilValue(activeUserAtom);
  return (
    <Modal
      closeOnOverlayClick={false}
      onClose={closeModalHanlder}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent height={"560px"} width={["300px",null, null,  "400px",]}>
        <ModalCloseButton position="absolute" top="-22px" right="-34px"/>
        <ModalBody p={0} display="flex" flexDirection={"column"}>
          <Box w={"100%"} h="240px">
            <Image
              w="100%"
              h="100%"
              objectPosition={"0px -140px"}
              objectFit={"cover"}
              src={userImage}
              alt="user-img"
            />
          </Box>
          <Flex flexDirection={"column"} flex={"1"} padding="20px">
            <Flex
              flexDirection={"column"}
              w="100%"
              alignItems={"center"}
              gap="10px"
            >
              <Text fontWeight={"bold"} fontSize="2xl">
                {activeUser?.name}
              </Text>
              <Text>{activeUser?.phone}</Text>
              <Text>Email: {activeUser?.website}</Text>
              <Text mt={2} textAlign={"center"} fontSize="sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                ipsum eos et. Sapiente nisi odio odit tenetur tempore at quia.
              </Text>
            </Flex>

            <Flex
              mt="auto"
              flexDir={"column"}
              gap="20px"
              w={"100%"}
              alignItems="center"
            >
              <Flex gap={"38px"}>
                <BsFacebook className={styles.icon} />
                <BsGithub className={styles.icon} />
                <BsLinkedin className={styles.icon} />
                <BsWhatsapp className={styles.icon} />
              </Flex>

              <Box>
                <Text fontSize={"2xs"}>
                  {activeUser?.address?.street}, {activeUser?.address?.city},{" "}
                  {activeUser?.address?.zipcode}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </ModalBody>
        {/* <ModalFooter>
          <Button onClick={closeModalHanlder}>Close</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
