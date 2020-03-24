import React from "react";
import styled from "styled-components";

import Box, { Separators } from "./ui/components/Box";
import { useWindowSize } from "./utils/hook-utils";
import { ThemeObject } from "./design/theme";
import AScreen from "./screens/AScreen";
import BScreen from "./screens/BScreen";
import CScreen from "./screens/CScreen";
import DScreen from "./screens/DScreen";
import EScreen from "./screens/EScreen";
import FScreen from "./screens/FScreen";

const SmallScreenApp = () => {
  return (
    <Container>
      <div style={{ overflow: "scroll" }}>
        <Header />
        <FirstPageBody />
        <SecondPageBody />
        <Footer />
      </div>
    </Container>
  );
};

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.container};
`;

const Header = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.1} separators={[Separators.bottom]}>
      <AScreen />
    </Box>
  );
};

const FirstPageBody = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.9} separators={[Separators.bottom]}>
      <Box flex={1} style={{ flexDirection: "column" }}>
        <Box flex={2} separators={[Separators.bottom]}>
          <DScreen />
        </Box>
        <Box flex={1}>
          <Box flex={1} separators={[Separators.right]}>
            <BScreen />
          </Box>
          <Box flex={1}>
            <CScreen />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const SecondPageBody = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.7} separators={[Separators.bottom]}>
      <EScreen />
    </Box>
  );
};

const Footer = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.3}>
      <FScreen />
    </Box>
  );
};

export default SmallScreenApp;
