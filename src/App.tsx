import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import { useTheme } from "./hooks/useTheme";

export const themeContext = createContext<
  ((switchTheme: DefaultTheme) => void) | null
>(null);

function App() {
  // themes
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // Disable browser's default behavior
  // to prevent the page go up when Up Arrow is pressed
  useEffect(() => {
    window.addEventListener(
      "keydown",
      e => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        ["ArrowUp", "ArrowDown"].indexOf(e.code) > -1 && e.preventDefault();
      },
      false
    );
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  // Update meta tag colors when switching themes
  useEffect(() => {
    const themeColor = theme.colors?.body;

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector(
      "meta[name='msapplication-TileColor']"
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    maskIcon && maskIcon.setAttribute("color", themeColor);
  }, [selectedTheme, theme.colors?.body]);

  const themeSwitcher = (switchTheme: DefaultTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      <h1 className="sr-only" aria-label="Terminal Portfolio">
        Terminal Portfolio
      </h1>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle  />
          <themeContext.Provider value={themeSwitcher}>
            <Terminal />
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
