import React from "react";
import { FaBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const DashboardCard = ({ title = "Dashboard" }) => {

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);

    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

return (  

<div className="h-[65px] w-full bg-white shadow-md border-b border-gray-200 flex items-center justify-between px-[12px] sm:px-[16px] md:px-[22px]">  
     
    <h1 className="text-[17px] sm:text-[18px] md:text-[20px] font-normal text-[#5f4638]"> 
{t(title)} </h1> 
 
  <div className="flex items-center gap-[10px] sm:gap-[14px] md:gap-[18px]"> 
    <button 
      onClick={changeLanguage}
      className="h-[30px] w-[42px] sm:h-[32px] sm:w-[46px] border border-black rounded-[8px] text-[12px] sm:text-[13px] transition-all duration-300 hover:bg-[#EDE8E4]"
    > 
      {i18n.language === "ar" ? "EN" : "AR"}
    </button> 
 
    <div className="relative flex items-center justify-center h-[32px] w-[32px] sm:h-[34px] sm:w-[34px] rounded-full transition-all duration-300 hover:bg-[#EDE8E4]"> 
      <FaBell className="text-[18px] sm:text-[20px] text-[#723134]" /> 
 
      <span className="absolute top-[3px] right-[3px] h-[8px] w-[8px] bg-red-500 rounded-full"></span> 
    </div> 
 
    <div className="h-[30px] w-[30px] sm:h-[32px] sm:w-[32px] rounded-full bg-[#723134] text-white flex items-center justify-center text-[14px] sm:text-[15px] font-bold transition-all duration-300 hover:bg-[#EDE8E4] hover:text-[#723134]"> 
      A 
    </div> 
  </div> 
</div> 
 
); 
}; 
 
export default DashboardCard;