import React from "react";
import "./App.css";
import { ConferenceForm } from "./Formik/Formik";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <ConferenceForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
