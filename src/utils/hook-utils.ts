import { useContext, useState, useEffect } from "react";
import { ActiveThemeObject, ThemeContext } from "../design/theme";

/**
 * custom hook to get window (screen) size.
 */
function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We want to make sure it only run on component did mount

  return windowSize;
}

/**
 * custom hook to get active theme object that stored in context
 */
const useActiveTheme = (): ActiveThemeObject => {
  return useContext(ThemeContext);
};

/* =============================================================================
Export
============================================================================= */

export { useWindowSize, useActiveTheme };
