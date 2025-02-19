const MapTimingSection = () => (
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
        BaglaMukhi Mata Mandir Timings
      </h2>
      <p className="p-1 text-base">
        Temple Hours : 5:00 AM - 9:00 PM (Open All Days)
      </p>
      <p className="p-1 text-base">Morning Aarti: 6:00 AM</p>
      <p className="p-1 text-base pb-10">Evening Aarti: 7:00 PM</p>
      <blockquote className="text-2xl md:text-3xl font-mono text-center">
        "In the glow of the Aarti, let your worries fade and divine blessings light
        your path."
      </blockquote>
    </div>
  </section>
);

export default MapTimingSection;
