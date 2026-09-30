import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Manage = [
  {
    title: "Total Campaigns",
    count: "12",
  },
  {
    title: "Funds Raised",
    count: "$150,000",
  },
  {
    title: "Documents Verified",
    count: "Yes",
  },
];

const Charity = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden">
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-full w-full overflow-auto pb-[30px]">
        <div className="font-bold text-xl sm:text-2xl text-[#543d2e] p-[20px] sm:p-[30px]">
          {t("Charity Management")}
        </div>

        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] px-[20px] sm:px-[30px]">
          {Manage.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[100px] shadow-lg rounded-xl w-full sm:w-[370px] p-[20px]"
            >
              <div className="text-gray-500">{t(item.title)}</div>
              <div className="text-[#723134] text-2xl font-bold">
                {item.count}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[270px] mt-[30px] w-[95%] bg-white ml-[2.5%] rounded-xl shadow-lg overflow-hidden">
          <p className="text-[#543D23] text-lg sm:text-xl p-[20px] font-medium">
            {t("Registered Campaigns")}
          </p>

          <div className="overflow-x-auto">
            <table
              border={1}
              className="w-[1120px] ml-[20px] rounded-xl overflow-hidden"
            >
              <thead>
                <tr className="text-white bg-[#723134] h-[40px] ml-[20px] rounded-t-lg p-[8px]">
                  <th className="pl-[9px]">{t("Campaign")}</th>
                  <th>{t("Category")}</th>
                  <th>{t("Raised")}</th>
                  <th>{t("Goal")}</th>
                  <th className="pr-[40px]">{t("Status")}</th>
                </tr>
              </thead>

              <tbody>
                <tr className="ml-[20px] h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                  <td>{t("Health Aid")}</td>
                  <td>{t("Medical")}</td>
                  <td>$25,000</td>
                  <td>$50,000</td>
                  <td>{t("Approved")}</td>
                </tr>

                <tr className="text-sm ml-[20px] h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                  <td>{t("Education Fund")}</td>
                  <td>{t("Education")}</td>
                  <td>$18,500</td>
                  <td>$40,000</td>
                  <td>{t("Pending")}</td>
                </tr>

                <tr className="h-[40px] text-center text-sm border-b bg-[#f2ede9] hover:bg-[#E8DEDA]">
                  <td>{t("Relief Packages")}</td>
                  <td>{t("Emergency")}</td>
                  <td>$12,000</td>
                  <td>$20,000</td>
                  <td>{t("Rejected")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white h-auto min-h-[250px] mt-[30px] w-[95%] ml-[2.5%] rounded-xl shadow-lg pb-[20px]">
          <div className="text-[#543d2e] font-bold text-lg sm:text-xl p-[20px]">
            {t("Legal Documents & Licenses")}
          </div>

          <p className="ml-[20px] mr-[20px] mb-[20px] text-sm">
            {t(
              "Upload your organization’s registration documents, licenses, and compliance reports for Authority review."
            )}
          </p>

          <input
            type="file"
            placeholder={t("Choose your file")}
            className="pl-[10px] pt-[2px] h-[35px] w-[calc(100%-40px)] ml-[20px] border border-gray-400"
          />

          <button className="h-[45px] text-white rounded-xl w-[160px] bg-[#723134] hover:bg-green-900 m-[20px]">
            {t("Upload Document")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Charity;