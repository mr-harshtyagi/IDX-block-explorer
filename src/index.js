import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Popup from "./components/Popup";
import { AppbarProvider } from "./contexts/appbarcontext";

ReactDOM.render(
  <AppbarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="popup" element={<Popup />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </AppbarProvider>,

  document.getElementById("root")
);
