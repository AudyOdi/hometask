import React from "react";
import styled from "styled-components";

import Box from "../ui/components/Box";
import { ThemeObject } from "../design/theme";

const CScreen = () => {
  return (
    <Container>
      <span>C</span>
    </Container>
  );
};

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.boxC};
`;
export default CScreen;
