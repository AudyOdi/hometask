import React from "react";

import { View } from "./ui/primitives";
import Box, { Separators } from "./ui/components/Box";
import { useWindowSize, useActiveTheme } from "./utils/hook-utils";
import { ThemeOptions } from "./design/theme";

const SmallScreenApp = () => {
  const { theme } = useActiveTheme();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: theme.container
      }}
    >
      <div style={{ overflow: "scroll" }}>
        <Header />
        <FirstPageBody />
        <SecondPageBody />
        <Footer />
      </div>
    </View>
  );
};

const Header = () => {
  const size = useWindowSize();
  const { theme } = useActiveTheme();

  return (
    <Box
      height={size.height * 0.1}
      backgroundColor={theme.boxA}
      separators={[Separators.bottom]}
    >
      <span>A</span>
    </Box>
  );
};

const FirstPageBody = () => {
  const size = useWindowSize();
  const { theme } = useActiveTheme();

  return (
    <Box height={size.height * 0.9} separators={[Separators.bottom]}>
      <Box flex={1} style={{ flexDirection: "column" }}>
        <Box
          flex={2}
          backgroundColor={theme.boxD}
          separators={[Separators.bottom]}
        >
          <span>D</span>
        </Box>
        <Box flex={1}>
          <Box
            flex={1}
            backgroundColor={theme.boxB}
            separators={[Separators.right]}
          >
            <span>B</span>
          </Box>
          <Box flex={1} backgroundColor={theme.boxC}>
            <span>C</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const SecondPageBody = () => {
  const size = useWindowSize();
  const { theme } = useActiveTheme();

  return (
    <Box
      height={size.height * 0.7}
      backgroundColor={theme.boxE}
      separators={[Separators.bottom]}
    >
      <span>E</span>
    </Box>
  );
};

const Footer = () => {
  const size = useWindowSize();
  const { theme, activeTheme, setActiveTheme } = useActiveTheme();

  return (
    <Box height={size.height * 0.3} backgroundColor={theme.boxF}>
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

export default SmallScreenApp;
