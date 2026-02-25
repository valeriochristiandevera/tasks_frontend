import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e",
      dark: "#0b5d57",
      light: "#14b8a6",
    },
    secondary: {
      main: "#c2410c",
      dark: "#9a3412",
      light: "#fb923c",
    },
    success: {
      main: "#15803d",
    },
    warning: {
      main: "#b45309",
    },
    error: {
      main: "#b91c1c",
    },
    background: {
      default: "#f4f9f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#334155",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "'Sora', 'IBM Plex Sans', 'Trebuchet MS', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 800,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 800,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 0% 0%, rgba(20,184,166,0.2) 0%, rgba(244,249,248,0) 45%), radial-gradient(circle at 100% 0%, rgba(251,146,60,0.22) 0%, rgba(244,249,248,0) 40%), #f4f9f8",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(15, 118, 110, 0.14)",
          boxShadow: "0 12px 26px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 16,
          paddingRight: 16,
        },
        containedPrimary: {
          boxShadow: "0 8px 18px rgba(15, 118, 110, 0.3)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export default theme;
