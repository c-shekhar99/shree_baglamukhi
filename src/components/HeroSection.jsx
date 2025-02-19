import { motion } from "framer-motion";
import BookPoojaButton from "./BookPoojaButton";
import BackgroundBorder from "./BackgroudBorder";

const images = [
  "gallery/1.png",
  "gallery/2.jpg",
  "gallery/3.png",
  "gallery/5.jpg",
  "gallery/6.png",
  "gallery/7.png",
  "gallery/8.png",
  "gallery/9.jpg",
];

const HeroSection = () => (
  <section
    id="hero"
    className="w-full min-h-[85vh] flex flex-col md:flex-row text-left gap-8 overflow-hidden bg-[#FFFDF5]"
  >
    {/* Text Section */}
    <div className="flex-1 p-4 md:p-8">
      <p className="text-[#6b570b] p-2 text-sm">
        A trusted guide for your spirtual peace and prosperity.
      </p>
      <h1 className="text-2xl md:text-3xl font-bold font-medium">
        Transform your life with the blessings of Baglamukhi Mata.
      </h1>
      <p className="text-[#74797b] pt-2 pb-8 text-sm md:text-base">
        Pandit Deepak Guruji specializes in authentic Baglamukhi Mata puja, havan,
        and astrological consultations, helping you overcome obstacles,
        achieve success, and attain inner peace. Book your personalized puja
        today and experience divinity.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="font-medium text-sm w-28 h-11 flex justify-center items-center gap-2 px-4 py-3 rounded-lg border border-[#6b570b] bg-[#fffae8]">
          Learn More
        </button>
        <BookPoojaButton />
      </div>
      {/* Responsive BackgroundBorder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm gap-1">
        <BackgroundBorder>🌟 10,000+ Successful Pujas Performed</BackgroundBorder>
        <BackgroundBorder>📜 Authentic Vedic Practices</BackgroundBorder>
        <BackgroundBorder>🕉️ Guidance by Experienced Pandit</BackgroundBorder>
        <BackgroundBorder>🙏 Personalized Ceremonies for Your Needs</BackgroundBorder>
        <BackgroundBorder>🔥 Powerful Rituals for Transformation</BackgroundBorder>
        <BackgroundBorder>💫 Blessings for Peace, Prosperity, and Success</BackgroundBorder>
        <BackgroundBorder>🔱 Guided by Expert Pandit</BackgroundBorder>
        <BackgroundBorder>🛕 Trust of Traditional Practices</BackgroundBorder>
      </div>
    </div>

    {/* Image Slideshow Section */}
    <div className="relative flex flex-row gap-4 w-full md:w-[40%] h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Gradient fade overlays */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FFFDF5] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FFFDF5] to-transparent z-10 pointer-events-none" />

      {/* Upward Scrolling Section */}
      <div className="w-1/2 md:w-[280px] h-full overflow-hidden">
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="h-32 w-full object-cover rounded-xl"
            />
          ))}
        </motion.div>
      </div>

      {/* Downward Scrolling Section */}
      <div className="w-1/2 md:w-[233px] h-full overflow-hidden">
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["-50%", 0] }}
          transition={{ repeat: Infinity, duration: 13, ease: "linear" }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="h-32 w-full object-cover rounded-xl"
            />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
