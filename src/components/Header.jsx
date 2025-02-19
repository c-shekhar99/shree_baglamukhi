import React, { useState } from "react";
import BookPoojaButton from "./BookPoojaButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <header className="text-[#74797b] box-border flex items-center justify-between p-4 fixed w-full h-[90px] top-0 left-0 bg-[#FFFDF5] border-b border-[#E7E7E7] z-50">
        {/* Logo */}
        <img
          src="gallery/Header logo/01.png"
          alt="Logo"
          className="h-[58px] w-auto"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-amber-600">
            Services
          </a>
          <a href="#why-us" className="text-gray-700 hover:text-amber-600">
            Why Pandit Deepkaj Guruji?
          </a>
          <a href="#gallery" className="text-gray-700 hover:text-amber-600">
            Gallery
          </a>
          <a href="#history" className="text-gray-700 hover:text-amber-600">
            History of Temple
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <img
            src="Vector.svg"
            alt="Vector Icon"
            className="w-[32px] bg-amber-100 p-2 rounded-lg hover:bg-amber-200"
          />
          <img
            src="Group.svg"
            alt="Group Icon"
            className="w-[32px] bg-amber-100 p-2 rounded-lg hover:bg-amber-200"
          />
          <BookPoojaButton />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 w-full bg-[#FFFDF5] border-b border-[#E7E7E7] z-40">
          <nav className="flex flex-col items-center py-4 gap-4">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-amber-600"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-amber-600"
            >
              Why Pandit Deepkaj Guruji?
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-amber-600"
            >
              Gallery
            </a>
            <a
              href="#history"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-amber-600"
            >
              History of Temple
            </a>
            <div className="flex gap-4 mt-2">
              <img
                src="Vector.svg"
                alt="Vector Icon"
                className="w-[32px] bg-amber-100 p-2 rounded-lg hover:bg-amber-200"
              />
              <img
                src="Group.svg"
                alt="Group Icon"
                className="w-[32px] bg-amber-100 p-2 rounded-lg hover:bg-amber-200"
              />
              <BookPoojaButton />
            </div>
          </nav>
        </div>
      )}

      {/* Header Spacer */}
      <div className="h-[90px] w-full" />
    </>
  );
};

export default Header;
