export const stylesConsts = {
  borderRaius: "1vmin",
  playerSize: "50vmin",
  playerY: "50%",
  dark: "#11101b",
  white: "#d9d8eb",
  small: "320px",
  large: "1024px",
};

export const themes = {
  light: {
    ...stylesConsts,

    colors: {
      textColor: stylesConsts.dark,
      backgroundColor: stylesConsts.white,
    },
  },
  dark: {
    ...stylesConsts,

    colors: {
      textColor: stylesConsts.white,
      backgroundColor: stylesConsts.dark,
    },
  },
};

export const theme = themes.light;

export const lightTheme = {
  body: "#D9D8EB",
  text: "#000",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};
