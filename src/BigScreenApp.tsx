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

/* =============================================================================
Component
--------------------------------------------------------------------------------
BigScreenApp is a component that holds the structure of the app on big screen.
It consists of 3 main sections: Header, Body, and Footer.

On big screen, the app doesnt need to be scrollable.
============================================================================= */

const BigScreenApp = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

/* =============================================================================
Styled Components and Helpers
============================================================================= */

/**
 * Header component that will be rendered on the top of the screen.
 */

const Header = () => {
  return (
    <Box flex={1} separators={[Separators.bottom]}>
      <AScreen />
    </Box>
  );
};

/**
 * Body component that will be rendered on the center of the screen and holds
 * several other components as the content of the screen.
 */

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

/**
 * Footer component that will be rendered on the bottom of the screen.
 */

const Footer = () => {
  return (
    <Box flex={1.5}>
      <FScreen />
    </Box>
  );
};

/**
 * Container is a component that wraps all the components on this screen.
 */

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.container};
`;

/* =============================================================================
Export
============================================================================= */

export default BigScreenApp;
