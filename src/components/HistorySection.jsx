import React from "react";
import { useTranslation } from "react-i18next";

const HistorySection = () => {
  const { t } = useTranslation();


return(
  <section id="history" className="p-4 md:p-8 bg-[#FFFDF5] flex flex-col md:flex-row">
    <img
      src="gallery/Mandir.svg" // Replace with the actual path to your image
      alt="mandir"
      className="w-full md:w-[650px] h-[400px] mb-4 md:mb-0 md:mr-8 rounded-[13.5px]"
    />
    <div className="text-section text-left">
      <p className="p-2 text-sm md:text-base">{t('history.tagline')}</p>
      <h2 className="text-2xl md:text-3xl font-bold p-2 text-[#2a2100]">
      {t('history.heading')}
      </h2>
      <p className="text-[#74797b] pt-2 pb-2 text-sm md:text-base">
      {t('history.paragraph1')}
      </p>
      <p className="text-[#74797b] pt-2 pb-8 text-sm md:text-base">
      {t('history.paragraph2')}
      </p>
    </div>
  </section>)
};

export default HistorySection;
