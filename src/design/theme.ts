import { createContext } from "react";

export interface ActiveThemeObject {
  activeTheme: ThemeOptions;
  setActiveTheme: (newTheme: ThemeOptions) => void;
  theme: ThemeObject;
}

export interface ThemeObject {
  container: string;
  boxA: string;
  boxB: string;
  boxC: string;
  boxD: string;
  boxE: string;
  boxF: string;
  primaryButtonGradient: Array<string>;
}

const theme = {
  light: {
    container: "white",
    boxA: "red",
    boxB: "green",
    boxC: "blue",
    boxD: "yellow",
    boxE: "cyan",
    boxF: "purple",
    primaryButtonGradient: ["orange", "yellow"]
  },
  dark: {
    container: "black",
    boxA: "purple",
    boxB: "cyan",
    boxC: "yellow",
    boxD: "blue",
    boxE: "green",
    boxF: "red",
    primaryButtonGradient: ["orange", "yellow"]
  }
};

enum ThemeOptions {
  light,
  dark
}

const DEFAULT_ACTIVE_THEME = ThemeOptions.light;

const ThemeContext = createContext<ActiveThemeObject>({
  activeTheme: DEFAULT_ACTIVE_THEME,
  setActiveTheme: () => {},
  theme: theme.light
});

export { theme, ThemeOptions, ThemeContext, DEFAULT_ACTIVE_THEME };
