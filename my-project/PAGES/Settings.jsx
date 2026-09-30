import React from "react";
import DashboardCard from "../COMMON/header.jsx";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div>
      <DashboardCard title="Dashboard" />

      <section className="bg-[#f2ede9] h-auto w-full overflow-auto pb-[30px]">
        <p className="p-[20px] sm:p-[30px] text-[#543d2e] text-xl sm:text-2xl font-bold">
          {t("Settings")}
        </p>

        <div className="bg-white h-auto min-h-[390px] w-[95%] shadow-lg rounded-xl ml-[2.5%] sm:ml-[30px] pb-[20px] rtl:mr-[30px]">
          <p className="text-[#543d2e] text-lg sm:text-xl pt-[25px] sm:pt-[30px] pl-[20px] sm:pl-[30px] font-medium pb-[20px] rtl:mr-[30px]">
            {t("Profile Settings")}
          </p>

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium text-gray-500 rtl:mr-[30px]"
          >
            {t("Full Name")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] mb-[20px] border h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="text"
            placeholder={t("Enter your Full Name")}
          />
          <br />

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] text-gray-500 font-medium rtl:mr-[30px]"
          >
            {t("Email")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] border mb-[20px] h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="email"
            placeholder={t("Enter your Email")}
          />
          <br />

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium text-gray-500 rtl:mr-[30px]"
          >
            {t("Phone")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] mb-[20px] border h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="text"
            placeholder="+92 3456878"
          />

          <button className="h-[45px] hover:bg-green-700 text-white w-[160px] bg-[#723134] ml-[20px] sm:ml-[30px] rounded-lg rtl:mr-[30px]">
            {t("Save Changes")}
          </button>
        </div>

        <div className="bg-white mt-[30px] h-auto min-h-[390px] w-[95%] shadow-lg rounded-xl ml-[2.5%] sm:ml-[30px] pb-[20px] rtl:mr-[30px]">
          <p className="text-[#543d2e] text-lg sm:text-xl pt-[25px] sm:pt-[30px] pl-[20px] sm:pl-[30px] font-medium pb-[20px] rtl:mr-[30px]">
            {t("Security Settings")}
          </p>

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium text-gray-500 rtl:mr-[30px]"
          >
            {t("Current Password")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] mb-[20px] border h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="password"
            placeholder={t("Enter your current Password")}
          />
          <br />

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] text-gray-500 font-medium rtl:mr-[30px]"
          >
            {t("New Password")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] border mb-[20px] h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="password"
            placeholder={t("Enter your New Password")}
          />
          <br />

          <label
            htmlFor=""
            className="ml-[20px] sm:ml-[30px] font-medium text-gray-500 rtl:mr-[30px]"
          >
            {t("Confirm Password")}
          </label>
          <br />

          <input
            className="ml-[20px] sm:ml-[30px] mb-[20px] border h-[35px] pl-[20px] border-gray-400 rounded-xl w-[calc(100%-40px)] sm:w-[93%] rtl:mr-[30px]"
            type="password"
            placeholder={t("Confirm Password")}
          />

          <button className="h-[45px] hover:bg-green-700 text-white w-[160px] bg-blue-500 ml-[20px] sm:ml-[30px] rounded-lg rtl:mr-[30px]">
            {t("Update Password")}
          </button>
        </div>

        <div className="bg-white h-auto min-h-[200px] w-[95%] ml-[2.5%] sm:ml-[30px] rounded-xl mt-[30px] shadow-lg pb-[20px] rtl:mr-[30px]">
          <p className="ml-[20px] sm:ml-[30px] mb-[20px] text-[#543d2e] text-lg sm:text-xl font-medium pt-[25px] sm:pt-[30px] rtl:mr-[30px]">
            {t("Preferences")}
          </p>

          <div>
            <div className="flex justify-between items-center ml-[20px] sm:ml-[30px] mr-[20px] sm:mr-[30px]">
              <label>{t("Enable Dark Mode")}</label>
              <input type="checkbox" className="w-5 h-5" />
            </div>

            <div className="flex justify-between items-center ml-[20px] sm:ml-[30px] mr-[20px] sm:mr-[30px] mb-[10px] mt-[10px]">
              <label>{t("Email Notifications")}</label>
              <input type="checkbox" className="w-5 h-5" />
            </div>

            <div className="flex justify-between items-center ml-[20px] sm:ml-[30px] mr-[20px] sm:mr-[30px]">
              <label>{t("SMS Alerts")}</label>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;