import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      light: "#b0bec5",
      main: "#78909c",
      dark: "#546e7a",
      contrastText: "#fff",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default theme;
