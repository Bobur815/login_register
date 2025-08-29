import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, useColorScheme } from "@mui/material/styles";
import App from "./App";
import "./index.css";
import "preline/preline";


const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#2563eb" },
        background: { default: "#ffffff", paper: "#ffffff" },
        text: { primary: "#111827" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#60a5fa" },
        background: { default: "#0b0f1a", paper: "#111827" },
        text: { primary: "#e5e7eb" },
      },
    },
  },
});

function TailwindSync() {
  const { mode } = useColorScheme();
  React.useEffect(() => {
    if (!mode) return;
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
  return null;
}



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme} defaultMode="system" modeStorageKey="app-mode">
    <CssBaseline />
    <TailwindSync />
    <App />
  </ThemeProvider>
);
