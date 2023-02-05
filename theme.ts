import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: { mode: 'dark' },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'sans-serif',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 24 },
      },
    },
  },
});

export default theme;
