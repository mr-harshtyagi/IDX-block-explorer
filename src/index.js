import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
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

=======
import App from './components/App';
import TransactionData from './Pages/TransactionData';
import {BrowserRouter,Routes,Route} from "react-router-dom"

ReactDOM.render(
  // defining routes inside browser router
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transaction/:hash" element={<TransactionData />} />
    </Routes>
  </BrowserRouter>,
>>>>>>> 9bc9f84eba8bd209261430609a9eecf2b6fcd07a
  document.getElementById("root")
);
