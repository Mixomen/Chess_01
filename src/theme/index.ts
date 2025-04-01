import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2F3542', // 深蓝灰色
      light: '#4A4F5C',
      dark: '#1E1E1E',
    },
    secondary: {
      main: '#8B4513', // 棕色
      light: '#A0522D',
      dark: '#654321',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2F3542',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
      color: '#2F3542',
    },
    h6: {
      fontWeight: 600,
      color: '#2F3542',
    },
    subtitle1: {
      fontWeight: 500,
      color: '#2F3542',
    },
    body1: {
      color: '#2F3542',
    },
    body2: {
      color: '#666666',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
      },
    },
  },
}); 