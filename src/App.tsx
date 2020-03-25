import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { layoutGenerator } from "react-break";

import SmallScreenApp from "./SmallScreenApp";
import BigScreenApp from "./BigScreenApp";
import {
  theme,
  ThemeOptions,
  ThemeContext,
  DEFAULT_ACTIVE_THEME
} from "./design/theme";

/**
 * Breakpoints based on https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
 */
const layout = layoutGenerator({
  small: 0,
  big: 600
});

const OnSmallScreen = layout.is("small");
const OnBigScreen = layout.isAtLeast("big");

function App() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_ACTIVE_THEME);
  const appTheme =
    activeTheme === ThemeOptions.light ? theme.light : theme.dark;

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme, theme: appTheme }}
    >
      <ThemeProvider theme={appTheme}>
        <OnSmallScreen>
          <SmallScreenApp />
        </OnSmallScreen>

        <OnBigScreen>
          <BigScreenApp />
        </OnBigScreen>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
