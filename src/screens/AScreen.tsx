import React from "react";
import styled from "styled-components";

import Box from "../ui/components/Box";
import { ThemeObject } from "../design/theme";

/* =============================================================================
Component
============================================================================= */

const AScreen = () => {
  return (
    <Container>
      <span>A</span>
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
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.boxA};
`;

/* =============================================================================
Export
============================================================================= */

export default AScreen;
