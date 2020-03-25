import React from "react";
import styled from "styled-components";

import Box from "../ui/components/Box";
import { ThemeObject, ThemeOptions } from "../design/theme";
import { useActiveTheme } from "../utils/hook-utils";
import { Button } from "../ui/primitives";

/* =============================================================================
Component

Consist of button that can change theme to dark or light
============================================================================= */

const FScreen = () => {
  const { activeTheme, setActiveTheme } = useActiveTheme();
  return (
    <Container>
      <span>F</span>
      <Button
        text={`Set theme to ${
          activeTheme === ThemeOptions.light ? "dark" : "light"
        }`}
        onClick={() => {
          if (activeTheme === ThemeOptions.light) {
            setActiveTheme(ThemeOptions.dark);
          } else {
            setActiveTheme(ThemeOptions.light);
          }
        }}
      />
    </Container>
  );
};

/* =============================================================================
Styled Components
============================================================================= */

/**
 * Container is a component that wraps all the components on this screen.
 */

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.boxF};
`;

/* =============================================================================
Export
============================================================================= */

export default FScreen;
