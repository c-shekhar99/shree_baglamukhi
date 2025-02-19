import FreeConsultancyIcon from "../assets/icons/1.svg";
import ExperienceIcon from "../assets/icons/2.svg";
import TrustedIcon from "../assets/icons/3.svg";
import AvailabilityIcon from "../assets/icons/4.svg";
import BestResultsIcon from "../assets/icons/5.svg";
import OnlineRitualsIcon from "../assets/icons/6.svg";
import { useTranslation } from "react-i18next";
const icons = [
  FreeConsultancyIcon,
  ExperienceIcon,
  TrustedIcon,
  AvailabilityIcon,
  BestResultsIcon,
  OnlineRitualsIcon,
];

const titles = [
  "24 x 7 / 365 Availability",
  "Free Consultancy",
  "Years of Experience",
  "Best Results",
  "Online Rituals & Consultation",
  "Trusted by Devotees",
];

const WhyUsSection = () => {
  const { t } = useTranslation();

  const cards = t("whyUs.cards", { returnObjects: true });


  return(
  <section id="why-us" className="p-8 bg-[#FFFDF5]">
    <h2 className="text-2xl md:text-3xl font-bold pb-2 pt-8 text-[#2a2100]">
    {t("whyUs.heading")}
    </h2>
    <p className="text-sm text-[#6b570b] pb-8">
    {t("whyUs.subHeading")}
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-amber-950 text-base md:text-xl font-semibold bg-[#FFFDF5]">
      {cards.map((title, index) => (
        <div
          key={index}
          className="flex flex-col justify-end items-center gap-3 p-6 rounded-[13.5px] border border-neutral-200 bg-white"
        >
          <img src={icons[index]} alt={title} className="h-12 w-12" />
          <h3 className="text-center">{title}</h3>
        </div>
      ))}
    </div>
  </section>);
};

export default WhyUsSection;
