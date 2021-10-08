import React, { createContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const defaultContext = {
  activeTheme: "light",
  toggleTheme: () => {
    throw new Error("toggleTheme() not implemented");
  },
};

export const ThemeContext = createContext(defaultContext);

export const ThemeProvider = ({ children }) => {
  const [activeTheme, toggleTheme] = useState("dark");

  const defaultTheme = createTheme({});

  const muiTheme = createTheme({
    ...defaultTheme,
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontFamily: "Qicksand",
      },
      h2: {
        fontFamily: "Qicksand",
      },
      h3: {
        fontFamily: "Qicksand",
      },
      h4: {
        fontFamily: "Qicksand",
      },
      h5: {
        fontFamily: "Qicksand",
      },
      h6: {
        fontFamily: "Qicksand",
      },
    },
    palette: {
      background: {
        default: "#efebe9",
      },
      primary: {
        light: "#c8e6c9",
        main: "#a5d6a7",
        dark: "#81c784",
        contrastText: "#fff",
      },
      secondary: {
        light: "#bcaaa4",
        main: "#a1887f",
        dark: "#8d6e63",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
