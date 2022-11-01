import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Live from "./pages/Live";
import History from "./pages/History";

const Routess = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route path="/live" element= {<Live />} />
      <Route path="/history" element={<History />} />
      <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default Routess;