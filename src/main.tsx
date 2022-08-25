import "@fontsource/open-sans/500.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
