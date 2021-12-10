import React from "react";
import "./App.css";
import { ConferenceForm } from "./Formik/Formik";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterLuxon";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <div style={{ backgroundColor: "lightgrey" }}>
          <CssBaseline />
          <ConferenceForm />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
