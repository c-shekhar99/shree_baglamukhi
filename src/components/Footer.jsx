import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="p-4 md:p-8 bg-gradient-to-b from-[#ffce1b00] to-[#ffce1b4c] text-[#74797b] flex flex-col md:flex-row justify-between items-start">
      {/* Left Side - Logo & Description (33%) */}
      <div className="w-full md:w-1/3 space-y-4 mb-4 md:mb-0">
        <img
          src="gallery/Header logo/01.png" // Replace with actual path
          alt="Logo"
          className="h-[58px] w-auto"
        />
        <p className="text-sm text-left">
          {t("footer.description")}
        </p>
      </div>

      {/* Right Side - Quick Links & Quick Contacts (66%) */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between gap-4">
        {/* Quick Links Section */}
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold text-lg">{t("footer.quickLinks.heading")}</h3>
          <nav className="flex flex-col gap-2 mt-2 text-sm">
            <a href="#hero" className="hover:text-gray-200 transition">
              {t("footer.quickLinks.home")}
            </a>
            <a href="#why-us" className="hover:text-gray-200 transition">
              {t("footer.quickLinks.whyUs")}
            </a>
            <a href="#services" className="hover:text-gray-200 transition">
              {t("footer.quickLinks.services")}
            </a>
            <a href="#contact" className="hover:text-gray-200 transition">
              {t("footer.quickLinks.contact")}
            </a>
          </nav>
        </div>

        {/* Quick Contacts Section */}
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold text-lg">{t("footer.contact.heading")}</h3>
          <div className="mt-2 space-y-2 text-sm">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <img src="gallery/phone.svg" alt="Phone Icon" className="h-5 w-5" />
              <p>{t("footer.contact.phone")}</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <img src="gallery/mail.svg" alt="Email Icon" className="h-5 w-5" />
              <p>{t("footer.contact.email")}</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <img src="gallery/map-pin.svg" alt="Location Icon" className="h-5 w-5" />
              <p>{t("footer.contact.location")}</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="gallery/Facebook.svg" alt={t("footer.social.facebook")} className="h-6 w-6 hover:opacity-80 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="gallery/Instagram.svg" alt={t("footer.social.instagram")} className="h-6 w-6 hover:opacity-80 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="gallery/Twitter.svg" alt={t("footer.social.twitter")} className="h-6 w-6 hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
