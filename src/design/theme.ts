import { createContext } from "react";

/**
 * Theme object that will be stored in context.
 */
export interface ActiveThemeObject {
  activeTheme: ThemeOptions;
  setActiveTheme: (newTheme: ThemeOptions) => void;
  theme: ThemeObject;
}

/**
 * Theme palette
 */
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
    container: "#FFFFFF",
    boxA: "#545834",
    boxB: "#798F51",
    boxC: "#8F8879",
    boxD: "#F5E0B4",
    boxE: "#ECD386",
    boxF: "#CCC685",
    primaryButtonGradient: ["orange", "yellow"]
  },
  dark: {
    container: "#121212",
    boxA: "#3e432e",
    boxB: "#0d7377",
    boxC: "#eeeeee",
    boxD: "#b0a565",
    boxE: "#ff6464",
    boxF: "#2f3032",
    primaryButtonGradient: ["orange", "yellow"]
  }
};

/**
 * Available theme options that user can switch around
 */
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
