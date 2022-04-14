import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Popup from './components/Popup';


ReactDOM.render(
  // defining routes inside browser router
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="popup" element={<Popup />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
