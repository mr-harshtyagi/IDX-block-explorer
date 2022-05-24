import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
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
  document.getElementById("root")
);
