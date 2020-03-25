import React from "react";
import styled from "styled-components";

import Box from "../ui/components/Box";
import { ThemeObject, ThemeOptions } from "../design/theme";
import { useActiveTheme } from "../utils/hook-utils";
import { Button } from "../ui/primitives";

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

const Container = styled(Box)<{ theme: ThemeObject }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.boxF};
`;
export default FScreen;
