import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Beneficain = () => {
  const { t } = useTranslation();

  return (
    <div>
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-[664px] w-full overflow-auto">
        <p className="text-[#543D23] p-[30px] text-2xl font-bold">
          {t("Beneficiaries")}
        </p>

        <div className="h-[300px] w-[95%] bg-white ml-[30px] rounded-xl shadow-lg overflow-x-auto">
          <p className="text-[#543D23] text-xl p-[20px] font-medium">
            {t("Synced Beneficiaries")}
          </p>

          <table
            border={1}
            className="w-[1120px] ml-[20px] rtl:mr-[30px] rounded-xl overflow-hidden"
          >
            <thead>
              <tr className="text-white bg-[#723134] h-[40px] ml-[20px] rounded-t-lg p-[8px]">
                <th className="pl-[9px]">{t("ID")}</th>
                <th>{t("Name")}</th>
                <th>{t("National ID")}</th>
                <th>{t("Campaign")}</th>
                <th>{t("Aid Received")}</th>
                <th className="pr-[40px]">{t("Status")}</th>
              </tr>
            </thead>

            <tbody>
              <tr className="ml-[20px] h-[40px] text-center bg-[#f2ede9] text-sm border-b hover:bg-[#E8DEDA]">
                <td>BNF-001</td>
                <td>{t("Ahmed Khan")}</td>
                <td>QA123456789</td>
                <td>{t("Health Aid")}</td>
                <td>{t("Yes")}</td>
                <td>{t("Approved")}</td>
              </tr>

              <tr className="text-sm ml-[20px] h-[40px] text-center border-b hover:bg-[#F1F1F1]">
                <td>BNF-002</td>
                <td>{t("Fatima Ali")}</td>
                <td>QA987654321</td>
                <td>{t("Education Fund")}</td>
                <td>{t("No")}</td>
                <td>{t("Pending")}</td>
              </tr>

              <tr className="h-[40px] text-center text-sm border-b bg-[#f2ede9] hover:bg-[#E8DEDA]">
                <td>BNF-003</td>
                <td>{t("Mohammed Saad")}</td>
                <td>QA555666777</td>
                <td>{t("Relief Packages")}</td>
                <td>{t("Yes")}</td>
                <td>{t("Duplicate Flagged")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-[150px] mt-[30px] w-[95%] ml-[30px] rounded-xl shadow-lg bg-white">
          <p className="pt-[30px] pb-[20px] pl-[30px] text-xl font-medium rtl:mr-[30px]">
            {t("Manage Beneficiaries")}
          </p>

          <div className="flex gap-4 ml-[30px] mr-[30px]">
            <button className="h-[40px] w-[550px] text-center rounded-xl hover:bg-[#8B5A2B] bg-[#723134] text-white">
              {t("Add New Beneficiary")}
            </button>

            <button className="h-[40px] w-[550px] text-center rounded-xl hover:bg-green-600 bg-green-500 text-white">
              {t("Sync with Saudia")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beneficain;