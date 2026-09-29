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

const Dashboard = () => {
  const [Selected, setSelected] = useState(0);

  return (
    <div className="w-[20%] shrink-0">
      <section className="bg-[#723134] h-[729px] w-full">
        <h1 className="p-[10%] text-2xl font-bold text-white">Dashborad</h1>

        <div className="ml-[10%]">
          <Link
            onClick={() => {
              setSelected(0);
            }}
            to="/"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[20px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 0 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaHouse />
            </span>
            <span>Overview</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(1);
            }}
            to="/donation"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 1 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaHeart />
            </span>
            <span>Donation</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(2);
            }}
            to="/donors"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 2 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaHandshake />
            </span>
            <span>Donors</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(3);
            }}
            to="/charities"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 3 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaUserGroup />
            </span>
            <span>Charities</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(4);
            }}
            to="/campaigns"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] 
             text-white transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 4 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaFileLines />
            </span>
            <span>Campaigns</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(5);
            }}
            to="/authority"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] text-white 
             transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 5 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaChartLine />
            </span>
            <span>Authority</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(6);
            }}
            to="/beneficiaries"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] text-white 
            transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
              Selected === 6 ? "bg-white !text-[#723134]" : ""
            }`}
          >
            <span className="text-xl">
              <FaDatabase />
            </span>
            <span>Beneficiaries</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(7);
            }}
            to="/reports"
            className={`flex items-center gap-3 h-[50px] w-[250px] mb-[15px] rounded-xl p-[10px] text-white 
             transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
               Selected === 7 ? "bg-white !text-[#723134]" : ""
             }`}
          >
            <span className="text-xl">
              <FaFileLines />
            </span>
            <span>Reports</span>
          </Link>

          <Link
            onClick={() => {
              setSelected(8);
            }}
            to="/settings"
            className={`flex items-center gap-3 h-[50px] w-[250px] rounded-xl p-[10px] text-white 
            transition-all duration-300 ease-in-out hover:bg-[#EDE8E4] hover:text-[#723134] ${
              Selected === 8 ? "bg-white !text-[#723134]" : ""
            }`}
          >
            <span className="text-xl">
              <FaGear />
            </span>
            <span>Settings</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;