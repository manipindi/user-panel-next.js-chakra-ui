import { Chakra } from "@/chakra-config";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", theme.config.initialColorMode);
  }, []);
  return (
    <Chakra>
      <RecoilRoot>
        <Box minHeight={"100vh"} maxWidth="100vw">
          <Component {...pageProps} />
        </Box>
      </RecoilRoot>
    </Chakra>
  );
}
