import React, { useState } from "react";
// import './App.scss';
import Player from "./Components/Player";
import GitLogo from "./Components/GitLogo";
import Switch from "./Components/Switch";
import styled, { ThemeProvider } from "styled-components";
import { theme, lightTheme, darkTheme } from "./theme";

let Body = styled.div`
  background-color: ${theme.colors.backgroundColor};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  * {
    user-select: none;
  }
`;

function App() {
  const [currentTheme, switchTheme] = useState(lightTheme);
  // Функция последовательно свитчит темы по кругу
  const themeSwitcher = () => {
    currentTheme === lightTheme && switchTheme(darkTheme);
    currentTheme === darkTheme && switchTheme(lightTheme);
  };

  // console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <Body>
        <Player />

        <div>
          <Switch theme={currentTheme} themeSwitcher={themeSwitcher} />
          <GitLogo />
        </div>
      </Body>
    </ThemeProvider>
  );
}

export default App;
