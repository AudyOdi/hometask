import React from "react";

import Box, { Separators } from "./ui/components/Box";
import { useActiveTheme } from "./utils/hook-utils";
import { ThemeOptions } from "./design/theme";

const BigScreenApp = () => {
  const { theme } = useActiveTheme();
  return (
    <Box
      flex={1}
      backgroundColor={theme.container}
      style={{ flexDirection: "column" }}
    >
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

const Header = () => {
  const { theme } = useActiveTheme();
  return (
    <Box flex={1} backgroundColor={theme.boxA} separators={[Separators.bottom]}>
      <span>A</span>
    </Box>
  );
};

const Body = () => {
  const { theme } = useActiveTheme();
  return (
    <Box
      flex={6}
      backgroundColor={theme.container}
      separators={[Separators.bottom]}
    >
      <Box flex={1} style={{ flexDirection: "column" }}>
        <Box
          flex={1}
          backgroundColor={theme.boxB}
          separators={[Separators.bottom]}
        >
          <span>B</span>
        </Box>
        <Box flex={1} backgroundColor={theme.boxC}>
          <span>C</span>
        </Box>
      </Box>
      <Box
        flex={3}
        backgroundColor={theme.boxD}
        separators={[Separators.left, Separators.right]}
      >
        <span>D</span>
      </Box>
      <Box flex={1} backgroundColor={theme.boxE}>
        <span>E</span>
      </Box>
    </Box>
  );
};

const Footer = () => {
  const { activeTheme, setActiveTheme, theme } = useActiveTheme();
  return (
    <Box flex={2} backgroundColor={theme.boxF}>
      <span>F</span>
      <button
        onClick={() => {
          if (activeTheme === ThemeOptions.light) {
            setActiveTheme(ThemeOptions.dark);
          } else {
            setActiveTheme(ThemeOptions.light);
          }
        }}
      />
    </Box>
  );
};

export default BigScreenApp;
