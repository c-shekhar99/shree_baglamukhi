import React from "react";
import { useTranslation } from "react-i18next";
import BookPoojaButton from "./BookPoojaButton";

const GurujiSection = () => {
  const { t } = useTranslation();

return(
  <section
    id="guruji"
    className="About-Guruji bg-[#FFFDF5] flex flex-col md:flex-row items-start gap-4 p-4 md:p-8"
  >
    {/* Text Section */}
    <div className="flex-1 text-left">
      <p className="mb-2 text-sm font-medium">{t("guruji.about")}</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[#2a2100] pb-3">
      {t("guruji.heading")}
      </h2>
      <p className="text-[#74797b] pt-2 pb-8 text-sm md:text-base">
      {t("guruji.description")}
      </p>
      <BookPoojaButton />
      <div className="mt-4">
        <img
          src="gallery/call.svg" // Ensure to use the correct path format
          alt="guruji call"
          className="h-5"
        />
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1 flex justify-center md:justify-end">
      <img
        src="gallery/Dipak-Guruji.png" // Replace with the actual path to your image
        alt="guruji"
        className="w-full md:w-[500px] h-auto md:h-[380px] object-cover rounded-[13.5px]"
      />
    </div>
  </section>
);
};
export default GurujiSection;
