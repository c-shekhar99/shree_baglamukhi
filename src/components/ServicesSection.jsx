import { useState } from "react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  
  // Retrieve the service details array from translations
  const serviceDetails = t("services.serviceDetails", { returnObjects: true });

  return (
    <section id="services" className="w-full py-16 px-4 sm:px-8 md:px-16 bg-[#FFFDF5]">
      {/* Section Header */}
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{t("services.heading")}</h2>
        <p className="text-[#6b570b] text-sm mt-2">
          {t("services.subheading")}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 transition-all duration-300 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {serviceDetails.slice(0, showAll ? serviceDetails.length : 8).map((service, index) => (
          <div 
            key={index} 
            className="relative flex flex-col justify-end items-center w-full sm:max-w-[280px] mx-auto h-[250px] rounded-xl border border-gray-300 bg-cover bg-center shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(gallery/Service/0${index+1}.png)` }}
          >
            {/* Background Overlay for Readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Service Title */}
            <h3 className="relative text-lg font-semibold text-white z-10 px-3 py-2 bg-opacity-60 rounded-lg">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="relative text-sm text-white z-10 px-4 py-2 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* More Services Button */}
      {!showAll && (
        <div className="mt-8 text-center">
          <button
            className="px-6 py-2 text-lg font-semibold text-amber-950 underline hover:text-amber-700 transition-all duration-300"
            onClick={() => setShowAll(true)}
          >
            {t("services.button")}
          </button>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
