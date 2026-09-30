import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Donation = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden">
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-full w-full overflow-auto">
        <p className="text-[#543D23] p-[20px] sm:p-[30px] text-xl sm:text-2xl font-bold">
          {t("Donations")}
        </p>

        <div className="h-[300px] w-[95%] bg-white ml-[2.5%] rtl:mr-[30px] rounded-xl shadow-lg overflow-hidden">
          <p className="text-[#543D23] text-lg sm:text-xl p-[15px] sm:p-[20px] font-medium rtl:mr-[30px]">
            {t("Donation Transactions")}
          </p>

          <div className="overflow-x-auto">
            <table
              border={1}
              className="w-[1120px] ml-[20px] rtl:mr-[30px] rounded-xl overflow-hidden"
            >
              <thead>
                <tr className="text-white bg-[#723134] h-[40px] ml-[20px] rounded-t-lg p-[8px]">
                  <th className="pl-[9px]">{t("Txn ID")}</th>
                  <th>{t("Donor Name")}</th>
                  <th>{t("Campaign")}</th>
                  <th>{t("Amount")}</th>
                  <th>{t("Payment Method")}</th>
                  <th>{t("Date")}</th>
                  <th className="pr-[40px]">{t("Status")}</th>
                </tr>
              </thead>

              <tbody>
                <tr className="ml-[20px] h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                  <td>TXN-1001</td>
                  <td>Qatar Airways</td>
                  <td>{t("Education for All")}</td>
                  <td>500,000 QAR</td>
                  <td>{t("Bank Transfer")}</td>
                  <td>30-Aug-2025</td>
                  <td>{t("Completed")}</td>
                </tr>

                <tr className="text-sm ml-[20px] h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                  <td>TXN-1002</td>
                  <td>Mohammed Abdullah</td>
                  <td>{t("Orphan Support")}</td>
                  <td>10,000 QAR</td>
                  <td>{t("Credit Card")}</td>
                  <td>28-Aug-2025</td>
                  <td>{t("Pending")}</td>
                </tr>

                <tr className="h-[40px] text-center text-sm border-b bg-[#f2ede9] hover:bg-[#E8DEDA]">
                  <td>TXN-1003</td>
                  <td>Vodafone Qatar</td>
                  <td>{t("Healthcare Aid")}</td>
                  <td>1,200,000 QAR</td>
                  <td>{t("Mobile Wallet")}</td>
                  <td>15-Aug-2025</td>
                  <td>{t("Completed")}</td>
                </tr>

                <tr className="text-sm text-center h-[40px] border-b hover:bg-[#F1F1F1]">
                  <td>TXN-1004</td>
                  <td>Fatima Zahra</td>
                  <td>{t("Food Distribution")}</td>
                  <td>2,000 QAR</td>
                  <td>{t("Debit Card")}</td>
                  <td>01-Sep-2025</td>
                  <td>{t("Failed")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="h-auto min-h-[150px] mt-[30px] w-[95%] ml-[2.5%] rtl:mr-[30px] rounded-xl shadow-lg bg-white pb-[20px]">
          <p className="pt-[25px] sm:pt-[30px] pb-[20px] pl-[20px] sm:pl-[30px] text-lg sm:text-xl font-medium rtl:mr-[30px]">
            {t("Filter Donations")}
          </p>

          <div className="flex flex-wrap gap-4 ml-[20px] sm:ml-[30px] rtl:mr-[30px]">
            <button className="h-[40px] w-[150px] text-center rounded-xl hover:bg-blue-600 bg-blue-700 text-white">
              {t("Show Completed")}
            </button>

            <button className="h-[40px] w-[130px] text-center rounded-xl hover:bg-yellow-600 bg-yellow-500 text-white">
              {t("Show Pending")}
            </button>

            <button className="h-[40px] w-[120px] text-center rounded-xl hover:bg-red-400 bg-red-700 text-white">
              {t("Show Failed")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;