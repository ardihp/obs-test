import React from "react";

// Utilities
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// CSS
import "./index.css";

// Pages
import IndexPage from "./page";

// Redux
import { Provider } from "react-redux";
import store from "./lib/redux/store";
import { ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IndexPage />
        <Toaster toastOptions={{ style: { maxWidth: 650 } }} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
