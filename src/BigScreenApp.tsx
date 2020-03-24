import React from "react";

import Box, { Separators } from "./ui/components/Box";
import { useActiveTheme } from "./utils/hook-utils";
import { ThemeOptions } from "./design/theme";

const BigScreenApp = () => {
  return (
    <Box flex={1} backgroundColor="white" style={{ flexDirection: "column" }}>
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
  return (
    <Box flex={6} backgroundColor="red" separators={[Separators.bottom]}>
      <span>B</span>
    </Box>
  );
};

const Footer = () => {
  const { activeTheme, setActiveTheme } = useActiveTheme();
  return (
    <Box flex={2} backgroundColor="green">
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
