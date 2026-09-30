
import React from "react";
import { useTranslation } from "react-i18next";
import DashboardCard from "../COMMON/header.jsx";

const Authority = () => {
  const { t } = useTranslation();

  const Manage = [
    {
      title: "Total Donations",
      count: "$1.2M",
    },
    {
      title: "Active Campaigns",
      count: "45",
    },
    {
      title: "Registered Charities",
      count: "120",
    },
    {
      title: "Alerts",
      count: "3",
    },
  ];

  return (
    <div>
      <DashboardCard title={t("Dashboard")} />

      <section className="bg-[#f2ede9] min-h-[830px] w-full pb-[30px]">
        <div className="font-bold text-2xl text-[#543d2e] p-[30px]">
          {t("Authority Dashboard")}
        </div>

        <div className="ml-[30px] mr-[30px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px]">
          {Manage.map((item) => (
            <div
              key={item.title}
              className="bg-white h-[100px] shadow-lg rounded-xl w-full p-[20px]"
            >
              <div className="text-gray-500">{t(item.title)}</div>
              <div className="text-[#723134] text-2xl font-bold">
                {item.count}
              </div>
            </div>
          ))}
        </div>

        <div className="h-auto min-h-[320px] mt-[30px] w-[calc(100%-60px)] bg-white ml-[30px] rounded-xl shadow-lg p-[20px]">
          <p className="text-[#543D23] text-xl font-medium mb-[20px]">
            {t("Campaign Approvals")}
          </p>

          <div className="w-full overflow-x-auto">
            <table
              border={1}
              className="w-full min-w-[850px] rounded-xl overflow-hidden"
            >
              <thead>
                <tr className="text-white bg-[#723134] h-[40px] rounded-t-lg">
                  <th className="pl-[9px]">{t("Campaign")}</th>
                  <th>{t("Charity")}</th>
                  <th>{t("Category")}</th>
                  <th>{t("Raised")}</th>
                  <th className="pr-[40px]">{t("Status")}</th>
                </tr>
              </thead>

              <tbody>
                <tr className="h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                  <td>{t("Health Aid")}</td>
                  <td>{t("Qatar Red Crescent")}</td>
                  <td>{t("Medical")}</td>
                  <td>$25,000</td>
                  <td>{t("Pending Approval")}</td>
                </tr>

                <tr className="text-sm h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                  <td>{t("Education Fund")}</td>
                  <td>{t("Education Qatar")}</td>
                  <td>{t("Education")}</td>
                  <td>$18,500</td>
                  <td>{t("Approved")}</td>
                </tr>

                <tr className="h-[40px] text-center text-sm border-b bg-[#f2ede9] hover:bg-[#E8DEDA]">
                  <td>{t("Relief Packages")}</td>
                  <td>{t("Relief Qatar")}</td>
                  <td>{t("Emergency")}</td>
                  <td>$12,000</td>
                  <td>{t("Rejected")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-[10px] mt-[20px]">
            <button className="h-[45px] w-full sm:w-[150px] text-white hover:bg-green-900 rounded-xl bg-green-600">
              {t("Approve Selected")}
            </button>

            <button className="h-[45px] w-full sm:w-[150px] text-white hover:bg-red-900 rounded-xl bg-red-600">
              {t("Rejected Selected")}
            </button>
          </div>
        </div>

        <div className="bg-white min-h-[220px] mt-[30px] w-[calc(100%-60px)] ml-[30px] rounded-xl shadow-lg p-[20px]">
          <div className="text-[#543d2e] font-bold text-xl mb-[20px]">
            {t("Suspicious Activity Alerts")}
          </div>

          <div className="mb-[20px] bg-red-200 min-h-[50px] px-[20px] py-[10px] w-full rounded-xl shadow-lg text-red-500 text-sm">
            {t(
              "Unusual spike in donations detected for Relief Packages."
            )}
          </div>

          <div className="mb-[20px] bg-yellow-100 min-h-[50px] px-[20px] py-[10px] w-full rounded-xl shadow-lg text-yellow-700 text-sm">
            {t("Delayed reporting by Education Fund campaign.")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authority;
