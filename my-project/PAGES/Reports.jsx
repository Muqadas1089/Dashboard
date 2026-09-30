import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Reports = () => {
  const { t } = useTranslation();

  return (
    <div>
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-[664px] w-full overflow-auto pb-[30px]">
        <p className="p-[20px] sm:p-[30px] text-xl sm:text-2xl font-bold text-[#543d2e]">
          {t("Reports & Compliance")}
        </p>

        <div className="bg-white h-auto min-h-[170px] w-[94%] ml-[3%] sm:ml-[30px] shadow-lg rounded-xl pb-[20px] rtl:mr-[30px]">
          <p className="p-[20px] font-medium text-lg sm:text-xl text-[#543d2e] rtl:mr-[30px]">
            {t("Generate New Report")}
          </p>

          <div className="flex flex-col lg:flex-row gap-4 ml-[20px] sm:ml-[30px] mr-[20px] sm:mr-[30px]">
            <div className="w-full lg:w-auto">
              <label htmlFor="" className="font-bold rtl:mr-[30px]">
                {t("Campaign")}
              </label>
              <br />

              <select
                className="border-2 border-gray-300 w-full lg:w-[350px] h-[35px] text-center mt-[10px]"
                name=""
                id=""
              >
                <option value="">{t("Health Aid")}</option>
                <option value="">{t("Education Fund")}</option>
                <option value="">{t("Relief Packages")}</option>
              </select>
            </div>

            <div className="w-full lg:w-auto">
              <label className="font-bold rtl:mr-[30px]" htmlFor="">
                {t("Report Type")}
              </label>
              <br />

              <select
                className="border-2 border-gray-300 w-full lg:w-[350px] h-[35px] mt-[10px] text-center"
                name=""
                id=""
              >
                <option value="">{t("Financial")}</option>
                <option value="">{t("Compliance")}</option>
                <option value="">{t("Audit")}</option>
              </select>
            </div>

            <button className="h-[40px] w-full lg:w-[30%] rounded-xl mt-[10px] lg:mt-[30px] bg-[#723134] text-white">
              {t("Generate")}
            </button>
          </div>
        </div>

        <div className="h-auto min-h-[320px] mt-[30px] w-[95%] ml-[2.5%] sm:ml-[30px] bg-white rounded-xl shadow-lg pb-[20px] rtl:mr-[30px]">
          <p className="text-[#543D23] text-lg sm:text-xl p-[20px] font-medium rtl:mr-[30px]">
            {t("Generated Reports")}
          </p>

          <div className="overflow-x-auto">
            <table
              border={1}
              className="w-[1120px] ml-[20px] rounded-xl overflow-hidden rtl:mr-[30px]"
            >
              <thead>
                <tr className="text-white bg-[#723134] h-[40px] ml-[20px] rounded-t-lg p-[8px]">
                  <th className="pl-[9px]">{t("Report ID")}</th>
                  <th>{t("Campaign")}</th>
                  <th>{t("Generated On")}</th>
                  <th>{t("Type")}</th>
                  <th className="pr-[40px]">{t("Status")}</th>
                </tr>
              </thead>

              <tbody>
                <tr className="ml-[20px] h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                  <td>#RPT-001</td>
                  <td>{t("Health Aid")}</td>
                  <td>2025-08-01</td>
                  <td>{t("Financial")}</td>
                  <td>{t("Completed")}</td>
                </tr>

                <tr className="text-sm ml-[20px] h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                  <td>#RPT-002</td>
                  <td>{t("Education Fund")}</td>
                  <td>2025-08-05</td>
                  <td>{t("Compliance")}</td>
                  <td>{t("Completed")}</td>
                </tr>

                <tr className="h-[40px] text-center text-sm border-b bg-[#f2ede9] hover:bg-[#E8DEDA]">
                  <td>#RPT-003</td>
                  <td>{t("Relief Packages")}</td>
                  <td>2025-08-10</td>
                  <td>{t("Financial")}</td>
                  <td>{t("In Progress")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-[20px] mr-[20px] sm:mr-[30px]">
            <button className="h-[45px] w-full sm:w-[150px] text-white hover:bg-green-900 rounded-xl bg-blue-600">
              {t("Download PDF")}
            </button>

            <button className="h-[45px] w-full sm:w-[150px] text-white hover:bg-red-900 rounded-xl bg-green-600">
              {t("Export Excel")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;