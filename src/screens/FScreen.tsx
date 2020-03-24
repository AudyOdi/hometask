import React from "react";
import styled from "styled-components";

import Box from "../ui/components/Box";
import { ThemeObject, ThemeOptions } from "../design/theme";
import { useActiveTheme } from "../utils/hook-utils";

const FScreen = () => {
  const { activeTheme, setActiveTheme } = useActiveTheme();
  return (
    <Container>
      <span>F</span>
      <button
        onClick={() => {
          if (activeTheme === ThemeOptions.light) {
            setActiveTheme(ThemeOptions.dark);
          } else {
            setActiveTheme(ThemeOptions.light);
          }
        }}
      >
        Set theme to {activeTheme === ThemeOptions.light ? "dark" : "light"}
      </button>
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
