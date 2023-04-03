import UserModal from "@/components/molecules/modals/user-modal";
import UserCard from "@/components/molecules/user-card";
import { activeUserAtom } from "@/recoil/atoms/active-user";
import { Box, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export const userImages:any = [
  "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5474232/pexels-photo-5474232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg",
];

interface UserProps<Type> {
  users: Array<Type>;
}

export default function UsersPage({ users }: UserProps<any>) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const [activeUser, setActiveUser]: any = useRecoilState(activeUserAtom);

  const quickLookhandler = (user: any) => {
    router.replace(
      { pathname: "/users", search: `?user=${user.username}` },
      undefined,
      { shallow: true }
    );
    setActiveUser(user);
    onOpen();
  };

  const profileHanlder = (user:any) => {
    if(user){
      router.push(`/users/${user.id.toString()}`)
    }    
  }

  const closeModalHanlder = (user: any) => {
    router.replace("/users", undefined, { scroll: false });
    onClose();
  };

  return (
    <Box
      w="100%"
      minHeight="100vh"
      display={"flex"}
      p="30px"
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        gap="40px"
        flexWrap={"wrap"}
        w="90%"
        justifyContent="center"
      >
        {!!users &&
          !!users.length &&
          users
            .slice(0, 9)
            .map((user, idx) => (
              <UserCard
                key={idx}
                user={user}
                idx={idx}
                quickLookhandler={quickLookhandler}
                profileHanlder={profileHanlder}
                userImage={userImages[idx]}
              />
            ))}
      </Box>

      <UserModal
        isOpen={isOpen}
        closeModalHanlder={closeModalHanlder}
        userImage={userImages[activeUser?.id - 1]}
      />
    </Box>
  );
}

export const getStaticProps = async () => {
  const usersResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      users: usersResponse.data,
    },
  };
};
