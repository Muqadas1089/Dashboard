
import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Donors = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden">
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-full w-full overflow-auto">
        <p className="text-[#543D23] p-[20px] sm:p-[30px] text-xl sm:text-2xl font-bold rtl:mr-[30px]">
          {t("Donors")}
        </p>

        <div className="h-[300px] w-[95%] bg-white ml-[2.5%] rounded-xl shadow-lg overflow-hidden rtl:mr-[30px]">
          <p className="text-[#543D23] text-lg sm:text-xl p-[15px] sm:p-[20px] font-medium rtl:mr-[30px]">
            {t("Registered Donors")}
          </p>

          <div className="overflow-x-auto">
            <table
              border={1}
              className="w-[1120px] ml-[20px] rounded-xl overflow-hidden rtl:mr-[30px]"
            >
              <thead>
                <tr className="text-white bg-[#723134] h-[40px] ml-[20px] rounded-t-lg p-[8px]">
                  <th className="pl-[9px]">{t("ID")}</th>
                  <th>{t("Donor Name")}</th>
                  <th>{t("Type")}</th>
                  <th>{t("Total Donations")}</th>
                  <th>{t("Last Donation")}</th>
                  <th className="pr-[40px]">{t("Engagement Level")}</th>
                </tr>
              </thead>

              <tbody>
                <tr className="ml-[20px] h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                  <td>{t("DNR-001")}</td>
                  <td>{t("Qatar Airways")}</td>
                  <td>{t("Corporate")}</td>
                  <td>{t("1,200,000 QAR")}</td>
                  <td>{t("15-Aug-2025")}</td>
                  <td>{t("High")}</td>
                </tr>

                <tr className="text-sm ml-[20px] h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                  <td>{t("DNR-002")}</td>
                  <td>{t("Fatima Zahra")}</td>
                  <td>{t("Individual")}</td>
                  <td>{t("5,000 QAR")}</td>
                  <td>{t("01-Sep-2025")}</td>
                  <td>{t("Low")}</td>
                </tr>

                <tr className="h-[40px] text-center text-sm border-b bg-[#f2ede9] hover:bg-[#E8DEDA]">
                  <td>{t("DNR-003")}</td>
                  <td>{t("Mohammed Abdullah")}</td>
                  <td>{t("Individual")}</td>
                  <td>{t("25,000 QAR")}</td>
                  <td>{t("28-Jul-2025")}</td>
                  <td>{t("Medium")}</td>
                </tr>

                <tr className="text-sm text-center h-[40px] border-b hover:bg-[#F1F1F1]">
                  <td>{t("DNR-004")}</td>
                  <td>{t("Vodafone Qatar")}</td>
                  <td>{t("Corporate")}</td>
                  <td>{t("3,500,000 QAR")}</td>
                  <td>{t("10-Aug-2025")}</td>
                  <td>{t("Very High")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="h-auto min-h-[150px] mt-[30px] w-[95%] ml-[2.5%] rounded-xl shadow-lg bg-white pb-[20px] rtl:mr-[30px]">
          <p className="pt-[25px] sm:pt-[30px] pb-[20px] pl-[20px] sm:pl-[30px] text-lg sm:text-xl font-medium rtl:mr-[30px]">
            {t("Donor Management")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 ml-[20px] sm:ml-[30px] mr-[20px] sm:mr-[30px]">
            <button className="h-[40px] w-full sm:w-[550px] text-center rounded-xl hover:bg-[#8B5A2B] bg-[#723134] text-white">
              {t("Add New Donor")}
            </button>

            <button className="h-[40px] w-full sm:w-[550px] text-center rounded-xl hover:bg-green-600 bg-green-500 text-white">
              {t("Export New Donor")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donors;

