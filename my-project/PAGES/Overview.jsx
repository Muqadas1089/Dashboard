
import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Donation = [
  {
    title: "Total Donations",
    num: "$1.2M",
  },
  {
    title: "Active Campaigns",
    num: "45",
  },
  {
    title: "Registered Charities",
    num: "120",
  },
  {
    title: "Beneficiaries",
    num: "8,540",
  },
];

const DonationChart = [
  { month: "Jan", donations: 20000 },
  { month: "Feb", donations: 35000 },
  { month: "Mar", donations: 28000 },
  { month: "Apr", donations: 42000 },
  { month: "May", donations: 51000 },
];

const Overview = () => {
  const { t } = useTranslation();

  const TranslatedChart = DonationChart.map((item) => ({
    ...item,
    month: t(item.month),
  }));

  return (
    <div className="h-screen overflow-hidden">
      <DashboardCard title={t("Dashboard")} />

      <div className="bg-[#f2ede9] h-[900px] overflow-auto">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {Donation.map((item, index) => (
            <div
              key={index}
              className="bg-white mt-[30px] h-[100px] shadow-lg rounded-xl w-[270px] p-[20px]"
            >
              <p className="text-gray-400">{t(item.title)}</p>

              <span className="text-2xl font-bold text-[#723134]">
                {item.num}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
          <div className="bg-white h-[390px] w-[95%] lg:w-[560px] mt-[50px] rounded-xl shadow-lg">
            <p className="text-xl font-bold text-[#723134] m-[30px]">
              {t("Donation Trends")}
            </p>

            <ResponsiveContainer width="100%" height="70%">
              <LineChart
                data={TranslatedChart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="month"
                  tick={{ fill: "#5f4638", fontSize: 16 }}
                />

                <YAxis
                  domain={[0, 60000]}
                  ticks={[0, 15000, 30000, 45000, 60000]}
                  tick={{ fill: "#5f4638", fontSize: 16 }}
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="donations"
                  stroke="#723134"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "white",
                    stroke: "#723134",
                    strokeWidth: 3,
                  }}
                  activeDot={{
                    r: 6,
                  }}
                  isAnimationActive={true}
                  animationDuration={2000}
                  animationEasing="ease-in-out"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white h-[390px] w-[95%] lg:w-[560px] mt-[50px] rounded-xl shadow-lg">
            <p className="m-[20px] text-xl font-bold text-[#723134]">
              {t("Top Campaigns")}
            </p>

            <div className="flex justify-center gap-[20%] sm:gap-[40%] lg:gap-[68%] mb-[10px]">
              <p>{t("Health Aid")}</p>
              <span>$250K</span>
            </div>

            <div className="flex justify-center gap-[20%] sm:gap-[40%] lg:gap-[62%] mb-[10px]">
              <p>{t("Education Fund")}</p>
              <span>$180K</span>
            </div>

            <div className="flex justify-center gap-[20%] sm:gap-[40%] lg:gap-[63%]">
              <p>{t("Relief Packages")}</p>
              <span>$120K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
