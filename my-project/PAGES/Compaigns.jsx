import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Compaigns = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen overflow-hidden">
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-full w-full overflow-auto pb-[30px]">
        <p className="p-[20px] sm:p-[30px] text-[#543d2e] text-xl sm:text-2xl font-bold">
          {t("Manage Campaigns")}
        </p>

        <div className="bg-white h-auto min-h-[390px] w-[95%] shadow-lg rounded-xl ml-[2.5%] rtl:mr-[30px] pb-[20px]">
          <p className="text-[#543d2e] text-lg sm:text-xl pt-[25px] sm:pt-[30px] pl-[20px] sm:pl-[30px] pb-[20px] rtl:mr-[30px]">
            {t("Create New Campaign")}
          </p>

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium rtl:mr-[30px]"
          >
            {t("Campaign Name")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] mb-[20px] border h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="text"
            placeholder={t("e.g Food Relief program")}
          />
          <br />

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium rtl:mr-[30px]"
          >
            {t("Category")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] border mb-[20px] h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="text"
            placeholder={t("Medical")}
          />
          <br />

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium rtl:mr-[30px]"
          >
            {t("Goal Amount")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] mb-[20px] border h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="text"
            placeholder="50000"
          />

          <button className="h-[45px] hover:bg-green-700 text-white w-[160px] bg-[#723134] ml-[20px] sm:ml-[30px] rounded-lg rtl:mr-[30px]">
            {t("Create Campaign")}
          </button>
        </div>

        <div className="h-[230px] mt-[50px] w-[95%] bg-white ml-[2.5%] rtl:mr-[30px] rounded-xl shadow-lg overflow-hidden">
          <p className="text-[#543D23] text-lg sm:text-xl p-[20px] font-medium rtl:mr-[30px]">
            {t("Existing Campaigns")}
          </p>

          <div className="overflow-x-auto">
            <table
              border={1}
              className="w-[1120px] ml-[20px] rtl:mr-[30px] rounded-xl overflow-hidden"
            >
              <thead>
                <tr className="text-white bg-[#723134] h-[40px] ml-[20px] rounded-t-lg p-[8px]">
                  <th>{t("Campaign")}</th>
                  <th>{t("Category")}</th>
                  <th>{t("Goal")}</th>
                  <th>{t("Raised")}</th>
                  <th className="pr-[40px]">{t("Status")}</th>
                </tr>
              </thead>

              <tbody>
                <tr className="ml-[20px] h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                  <td>{t("Health Aid")}</td>
                  <td>{t("Medical")}</td>
                  <td>$50,000</td>
                  <td>$25,000</td>
                  <td>{t("Approved")}</td>
                </tr>

                <tr className="text-sm ml-[20px] h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                  <td>{t("Education Fund")}</td>
                  <td>{t("Education")}</td>
                  <td>$40,000</td>
                  <td>$18,500</td>
                  <td>{t("Pending")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compaigns;