import BookPoojaButton from "./BookPoojaButton";

const GurujiSection = () => (
  <section
    id="guruji"
    className="About-Guruji bg-[#FFFDF5] flex flex-col md:flex-row items-start gap-4 p-4 md:p-8"
  >
    {/* Text Section */}
    <div className="flex-1 text-left">
      <p className="mb-2 text-sm font-medium">About Guruji</p>
      <h2 className="text-2xl md:text-3xl font-bold text-[#2a2100] pb-3">
        Mother Baglamukhi worshipper Pandit Deepak Guruji
      </h2>
      <p className="text-[#74797b] pt-2 pb-8 text-sm md:text-base">
        Acharya Pandit Deepak Guruji is a very renowned scholar astrologer who
        knows a lot about a temple and some old books. He has helped many people
        with what he knows. Acharya Shri Deepak Guruji does special rituals to
        help people who do not have enough money or face troubles from bad people.
        He asks a powerful goddess named Maa Baglamukhi to help them.
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

export default GurujiSection;
