import { useContext, useState, useEffect } from "react";
import { ActiveThemeObject, ThemeContext } from "../design/theme";

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
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const useActiveTheme = (): ActiveThemeObject => {
  return useContext(ThemeContext);
};

export { useWindowSize, useActiveTheme };
