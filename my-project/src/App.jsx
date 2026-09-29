import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../COMMON/Dashboard.jsx";
import Overview from "../PAGES/Overview.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Dashboard />

        <div className="w-[80%]">
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;