import { useTranslation } from "react-i18next";

const MapTimingSection = () => {
  const { t } = useTranslation();

  return(
  <section
    id="map-timing"
    className="p-4 md:p-8 bg-[#FFFDF5] flex flex-col md:flex-row gap-4"
  >
    <div className="map-section">
      <img
        src="Map.svg" // Replace with the actual path to your logo
        alt="Map"
        className="w-full md:w-[640px] h-[290px] mb-4 md:mb-0 md:mr-8 pt-[10px] pl-[10px] cursor-pointer"
        onClick={() =>
          window.open("https://maps.app.goo.gl/76An3ji7SAHzqH6i7")
        }
      />
    </div>
    <div className="timing-section text-left p-2">
      <h2 className="text-xl md:text-2xl font-bold p-2">
      {t("mapTiming.heading")}
      </h2>
      <p className="p-1 text-base">
      {t("mapTiming.templeHours")}
      </p>
      <p className="p-1 text-base">{t("mapTiming.morningAarti")}</p>
      <p className="p-1 text-base pb-10">{t("mapTiming.eveningAarti")}</p>
      <blockquote className="text-2xl md:text-3xl font-mono text-center">
      {t("mapTiming.quote")}
      </blockquote>
    </div>
  </section>
);}

export default MapTimingSection;
