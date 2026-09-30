import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHouse,
  FaUserGroup,
  FaHandshake,
  FaFileLines,
  FaChartLine,
  FaDatabase,
  FaGear,
} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [Selected, setSelected] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="w-[20%] min-w-[220px] shrink-0">
      <section className="bg-[#723134] h-full w-full">
        <div className="p-[10%]">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            {t("Dashboard")}
          </h1>
        </div>

        <div className="ml-[5%] mr-[5%] sm:ml-[10%] sm:mr-[10%]">
          <Link
            onClick={() => {
              setSelected(0);
            }}
            to="/"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[20px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 0 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaHouse />
            </span>
            <span>{t("Overview")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(1);
            }}
            to="/donation"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 1 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaHeart />
            </span>
            <span>{t("Donation")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(2);
            }}
            to="/donors"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 2 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaHandshake />
            </span>
            <span>{t("Donors")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(3);
            }}
            to="/Charity"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 3 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaUserGroup />
            </span>
            <span>{t("Charities")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(4);
            }}
            to="/Compaigns"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 4 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaFileLines />
            </span>
            <span>{t("Campaigns")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(5);
            }}
            to="/Authority"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] text-white 
             transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 5 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaChartLine />
            </span>
            <span>{t("Authority")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(6);
            }}
            to="/Beneficain"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] text-white 
            transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
              Selected === 6 ? "bg-white !text-[#723134]" : ""
            }`}
          >
            <span className="text-xl">
              <FaDatabase />
            </span>
            <span>{t("Beneficiaries")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(7);
            }}
            to="/Reports"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] mb-[15px] rounded-xl p-[10px] text-white 
             transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 7 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaFileLines />
            </span>
            <span>{t("Reports")}</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(8);
            }}
            to="/Settings"
            className={`flex items-center gap-3 h-[50px] w-full max-w-[250px] rounded-xl p-[10px] text-white 
            transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
              Selected === 8 ? "bg-white !text-[#723134]" : ""
            }`}
          >
            <span className="text-xl">
              <FaGear />
            </span>
            <span>{t("Settings")}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;