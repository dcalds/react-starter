import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import { GlobalProvider } from "../providers";

function Router() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default Router;
