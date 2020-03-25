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
import { ScrollView } from "./ui/primitives";

/* =============================================================================
Component
--------------------------------------------------------------------------------
SmallScreenApp is a component that holds the structure of the app on small screen.
Similar with BigScreenApp component, it consists of 3 main sections: Header,
Body, and Footer.

The difference with big screen is that small screen app needs to be scrollable
and the structure of the body is different compare to big screen. The way I
divided the screen is:
Header: A.
Page 1: D, B, C.
Page 2: E, F.
(For more info about A, B, C, D, E, and F, please refer to readme)

Every page will be rendered to match the screen height.
============================================================================= */

const SmallScreenApp = () => {
  return (
    <Container>
      <ScrollView>
        <Header />
        <FirstPageBody />
        <SecondPageBody />
        <Footer />
      </ScrollView>
    </Container>
  );
};

/* =============================================================================
Styled Components and Helpers
============================================================================= */

/**
 * Container is a component that wraps all the components on this screen.
 */

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.container};
`;

/**
 * Header component that will be rendered on the top of the screen.
 *
 * Header component will take 10% of the height of the device's screen.
 */

const Header = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.1} separators={[Separators.bottom]}>
      <AScreen />
    </Box>
  );
};

/**
 * The first page of the screen body, consist of B, C, and D component.
 *
 * the first page component will take 90% of the height of the device's screen.
 * (10% is the header)
 */

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

/**
 * The second page of the screen body, consist of E and F component.
 *
 * the second page component will take 70% of the height of the device's screen.
 */

const SecondPageBody = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.7} separators={[Separators.bottom]}>
      <EScreen />
    </Box>
  );
};

/**
 * The footer of the screen body, will take remaining 30% of
 * the height of the device's screen (70% is taken for second page).
 */

const Footer = () => {
  const size = useWindowSize();

  return (
    <Box height={size.height * 0.3}>
      <FScreen />
    </Box>
  );
};

/* =============================================================================
Export
============================================================================= */

export default SmallScreenApp;
