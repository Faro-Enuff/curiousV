import React, { FC, createContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

interface Props {}

interface ProviderValues {
  activeTheme: any;
  toggleTheme: any;
}

const defaultContext: ProviderValues = {
  activeTheme: 'light',
  toggleTheme: () => {
    throw new Error('toggleTheme() not implemented');
  },
};

export const ThemeContext = createContext(defaultContext);

export const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [activeTheme, toggleTheme] = useState('dark');

  const defaultTheme = createTheme({});

  const muiTheme = createTheme({
    ...defaultTheme,
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontFamily: 'Qicksand',
      },
      h2: {
        fontFamily: 'Qicksand',
      },
      h3: {
        fontFamily: 'Qicksand',
      },
      h4: {
        fontFamily: 'Qicksand',
      },
      h5: {
        fontFamily: 'Qicksand',
      },
      h6: {
        fontFamily: 'Qicksand',
      },
    },
    palette: {
      background: {
        default: '#212121',
      },
      primary: {
        light: '#e6f8fb',
        main: '#87A8A4',
        dark: '#afc2cb',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffffff',
        main: '#986D8E',
        dark: '#c0b3c2',
        contrastText: '#fff',
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
