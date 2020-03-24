import React from "react";
// import styled from "styled-components";

import { View } from "./ui/primitives";
import Box, { Separators } from "./ui/components/Box";
import { useWindowSize } from "./utils/hook-utils";

const SmallScreenApp = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
      <div style={{ overflow: "scroll" }}>
        <Header />
        <FirstPageBody />
        <SecondPageBody />
        <Footer />
      </div>
    </View>
  );
};

const Header = () => {
  const size = useWindowSize();

  return (
    <Box
      height={size.height * 0.1}
      backgroundColor="blue"
      separators={[Separators.bottom]}
    >
      <span>header</span>
    </Box>
  );
};

const FirstPageBody = () => {
  const size = useWindowSize();

  return (
    <Box
      height={size.height * 0.9}
      backgroundColor="white"
      separators={[Separators.bottom]}
    >
      <Box flex={1} style={{ flexDirection: "column" }}>
        <Box
          flex={2}
          backgroundColor="green"
          separators={[Separators.bottom]}
        ></Box>
        <Box flex={1} backgroundColor="white">
          <Box
            flex={1}
            backgroundColor="red"
            separators={[Separators.right]}
          ></Box>
          <Box flex={1} backgroundColor="pink"></Box>
        </Box>
      </Box>
    </Box>
  );
};
const SecondPageBody = () => {
  const size = useWindowSize();

  return (
    <Box
      height={size.height * 0.7}
      backgroundColor="cyan"
      separators={[Separators.bottom]}
    ></Box>
  );
};

const Footer = () => {
  const size = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "green",
        height: size.height * 0.3
      }}
    >
      <span>Footer</span>
    </div>
  );
};

export default SmallScreenApp;
