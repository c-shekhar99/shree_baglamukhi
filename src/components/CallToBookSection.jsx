import BookPoojaButton from "./BookPoojaButton";

const CallToBookSection = () => (
  <section 
    id="call-to-book" 
    className="relative w-full h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center text-white overflow-hidden"
  >
    {/* Background Video */}
    <video
      className="absolute inset-0 object-cover w-full h-full"
      autoPlay
      loop
      muted
      playsInline
      src="gallery/yagna.mp4" // Replace with your video path
    />

    {/* Dark Overlay for Contrast */}
    <div className="absolute inset-0 bg-black opacity-70"></div>

    {/* Section Content */}
    <div className="relative z-10 max-w-3xl p-4 md:p-6">
      <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">
        Call and Book Pooja
      </h2>
      <p className="text-base md:text-lg mt-2 drop-shadow-sm">
        Remove obstacles and attract blessings with a personalized puja. Call now to book your sacred ritual!
      </p>
      <p className="text-xl md:text-2xl font-semibold mt-4 drop-shadow-lg">
        Call us at: +91 9669070816
      </p>
      <div className="mt-6">
        <BookPoojaButton />
      </div>
    </div>
  </section>
);

export default CallToBookSection;
