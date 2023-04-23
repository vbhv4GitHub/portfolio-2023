import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#93c5fd',
      light: '#bfdbfe',
    },
    secondary: {
      main: '#fef3c7',
    },
    divider: '#6998AB',
  },
  typography: {
    fontFamily: [
      'Source Code Pro',
      'Roboto',
      'sans-serif',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
  },
});

const theme = createTheme(defaultTheme, {
  palette: {
    divider: defaultTheme.palette.primary.light,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 24 },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          color: defaultTheme.palette.primary.main,
          ':hover': {
            color: defaultTheme.palette.primary.light,
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: defaultTheme.palette.primary.main,
          ':hover': {
            color: defaultTheme.palette.primary.light,
          },
        },
      },
    },
  },
});

export default theme;
