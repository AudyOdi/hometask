import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import BigScreenApp from "./BigScreenApp";
import {
  theme,
  ThemeOptions,
  ThemeContext,
  DEFAULT_ACTIVE_THEME
} from "./design/theme";
// import SmallScreenApp from "./SmallScreenApp";

function App() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_ACTIVE_THEME);
  const appTheme =
    activeTheme === ThemeOptions.light ? theme.light : theme.dark;

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme, theme: appTheme }}
    >
      <ThemeProvider theme={appTheme}>
        <BigScreenApp />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
  // return <SmallScreenApp />;
}

export default App;
