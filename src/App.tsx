import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// import BigScreenApp from "./BigScreenApp";
import SmallScreenApp from "./SmallScreenApp";
import {
  theme,
  ThemeOptions,
  ThemeContext,
  DEFAULT_ACTIVE_THEME
} from "./design/theme";

function App() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_ACTIVE_THEME);
  const appTheme =
    activeTheme === ThemeOptions.light ? theme.light : theme.dark;

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme, theme: appTheme }}
    >
      <ThemeProvider theme={appTheme}>
        {/* <BigScreenApp /> */}
        <SmallScreenApp />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
