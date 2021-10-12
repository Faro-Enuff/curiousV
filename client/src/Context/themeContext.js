import React, { createContext, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const defaultContext = {
  activeTheme: "light",
  toggleTheme: () => {
    throw new Error("toggleTheme() not implemented");
  },
};

const ThemeContext = createContext(defaultContext);

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
        light: "#e6f8fb",
        main: "#e0f7fa",
        dark: "#afc2cb",
        contrastText: "#000000",
      },
      secondary: {
        light: "#ffffff",
        main: "#f3e5f5",
        dark: "#c0b3c2",
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

// const defaultTheme = createTheme({});

// const muiTheme = createTheme({
//   ...defaultTheme,
//   typography: {
//     fontFamily: "Quicksand",
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 600,
//     h1: {
//       fontFamily: "Qicksand",
//     },
//     h2: {
//       fontFamily: "Qicksand",
//     },
//     h3: {
//       fontFamily: "Qicksand",
//     },
//     h4: {
//       fontFamily: "Qicksand",
//     },
//     h5: {
//       fontFamily: "Qicksand",
//     },
//     h6: {
//       fontFamily: "Qicksand",
//     },
//   },
//   palette: {
//     background: {
//       default: "#efebe9",
//     },
//     primary: {
//       light: "#e6f8fb",
//       main: "#e0f7fa",
//       dark: "#afc2cb",
//       contrastText: "#000000",
//     },
//     secondary: {
//       light: "#ffffff",
//       main: "#f3e5f5",
//       dark: "#c0b3c2",
//       contrastText: "#fff",
//     },
//   },
// });

// export { muiTheme };
