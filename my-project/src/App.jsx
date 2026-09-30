import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../COMMON/Dashboard.jsx";
import Donation from "../PAGES/Donation.jsx";
import Overview from "../PAGES/Overview.jsx";
import Donors from "../PAGES/Donors.jsx";
import Charity from "../PAGES/Charity.jsx";
import Compaigns from "../PAGES/Compaigns.jsx";
import Authority  from "../PAGES/Authority.jsx";
import Beneficain from "../PAGES/Beneficain.jsx";
import Reports from "../PAGES/Reports.jsx";
import Settings from "../PAGES/Settings.jsx";
import "../i18n.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Dashboard />

        <div className="w-[80%]">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/Donors" element={<Donors />} />
            <Route path="/Charity" element={<Charity />} />
            <Route path="/Compaigns" element={<Compaigns />} />
            <Route path="/Authority" element={<Authority  />} />
            <Route path="/Beneficain" element={<Beneficain />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;