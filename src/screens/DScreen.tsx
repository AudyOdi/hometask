import React from "react";
import styled from "styled-components";

import Box from "../ui/components/Box";
import { ThemeObject } from "../design/theme";

const DScreen = () => {
  return (
    <Container>
      <span>D</span>
    </Container>
  );
};

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.boxD};
`;
export default DScreen;
