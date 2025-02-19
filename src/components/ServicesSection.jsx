import { useState } from "react";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const serviceDetails = [
    { image: "gallery/Service/01.png", title: "Hawan & Rituals", description: "Purify your surroundings with sacred fire ceremonies" },
    { image: "gallery/Service/02.png", title: "Astrological Guidance", description: "Get personalized astrological advice for life solutions" },
    { image: "gallery/Service/03.png", title: "Laxmi Prapti", description: "Attract wealth, prosperity, and financial success" },
    { image: "gallery/Service/04.png", title: "Spell Removal", description: "Eliminate negative energies and black magic influences" },
    { image: "gallery/Service/05.png", title: "Destruction of Enemies", description: "Overcome obstacles created by enemies and negative forces" },
    { image: "gallery/Service/06.png", title: "Childbirth Blessings", description: "Seek divine grace for healthy and happy parenthood" },
    { image: "gallery/Service/07.png", title: "Vastu Dosh Shanti", description: "Balance energies in your home or office for harmony" },
    { image: "gallery/Service/08.png", title: "Business Growth Solutions", description: "Enhance success in business and career" },
    { image: "gallery/Service/09.png", title: "Navagrah Shanti", description: "Reduce malefic planetary effects for a peaceful life" },
    { image: "gallery/Service/10.png", title: "Mangal Dosha Nivaran Puja", description: "Remove marriage-related obstacles caused by Mangal Dosha" },
    { image: "gallery/Service/11.png", title: "Marital Harmony Rituals", description: "Strengthen relationships and resolve conflicts" },
    { image: "gallery/Service/12.png", title: "Pitra Dosh Remedy", description: "Remove ancestral karma and receive blessings" }
  ];

  return (
    <section id="services" className="w-full py-16 px-4 sm:px-8 md:px-16 bg-[#FFFDF5]">
      {/* Section Header */}
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
        <p className="text-[#6b570b] text-sm mt-2">
          Experience the power of authentic Vedic rituals, astrological guidance, and spiritual solutions 
          to bring peace, prosperity, and success into your life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 transition-all duration-300 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {serviceDetails.slice(0, showAll ? 12 : 8).map((service, index) => (
          <div 
            key={index} 
            className="relative flex flex-col justify-end items-center w-full sm:max-w-[280px] mx-auto h-[250px] rounded-xl border border-gray-300 bg-cover bg-center shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${service.image})` }}
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
            More Services
          </button>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
