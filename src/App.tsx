import React from "react";
// import './App.scss';
import Player from "./Components/Player";
import GitLogo from "./Components/GitLogo";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const themeConsts = {
  borderRaius: "1vmin",
  playerSize: "50vmin",
  playerY: "50%",
  dark: "#11101b",
  white: "#d9d8eb",
  small: "320px",
  large: "1024px",
};

const themes = {
  light: {
    ...themeConsts,

    colors: {
      textColor: themeConsts.dark,
      backgroundColor: themeConsts.white,
    },
  },
  dark: {
    ...themeConsts,

    colors: {
      textColor: themeConsts.white,
      backgroundColor: themeConsts.dark,
    },
  },
};

const theme = themes.light;

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
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Player />
        <GitLogo />
      </Body>
    </ThemeProvider>
  );
}

export default App;
