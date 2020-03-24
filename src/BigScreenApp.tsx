import React from "react";
import styled from "styled-components";

import Box, { Separators } from "./ui/components/Box";
import { ThemeObject } from "./design/theme";
import AScreen from "./screens/AScreen";
import BScreen from "./screens/BScreen";
import CScreen from "./screens/CScreen";
import DScreen from "./screens/DScreen";
import EScreen from "./screens/EScreen";
import FScreen from "./screens/FScreen";

const BigScreenApp = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

const Header = () => {
  return (
    <Box flex={1} separators={[Separators.bottom]}>
      <AScreen />
    </Box>
  );
};

const Body = () => {
  return (
    <Box flex={6} separators={[Separators.bottom]}>
      <Box flex={1} style={{ flexDirection: "column" }}>
        <Box flex={1} separators={[Separators.bottom]}>
          <BScreen />
        </Box>
        <Box flex={1}>
          <CScreen />
        </Box>
      </Box>
      <Box flex={3} separators={[Separators.left, Separators.right]}>
        <DScreen />
      </Box>
      <Box flex={1}>
        <EScreen />
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box flex={1.5}>
      <FScreen />
    </Box>
  );
};

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.container};
`;

export default BigScreenApp;
