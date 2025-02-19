import { useTranslation } from "react-i18next";

const GallerySection = () => {
  // Strategic layout definition for balanced asymmetry
  const imageLayout = [
    "md:col-span-2 md:row-span-2",        // Large square (top-left)
    "md:col-span-1 md:row-span-2",        // Tall (top-right)
    "md:col-span-2 md:row-span-1",        // Wide (middle-left)
    "md:col-span-1 md:row-span-1",        // Small
    "md:col-span-1 md:row-span-1",        // Small
    "md:col-span-2 md:row-span-2",        // Large square (center-right)
    "md:col-span-1 md:row-span-1",        // Small
    "md:col-span-2 md:row-span-1",        // Wide (bottom-left)
    "md:col-span-1 md:row-span-2",        // Tall (bottom-center)
    "md:col-span-1 md:row-span-1",        // Small
    "md:col-span-1 md:row-span-1",        // Small
    "md:col-span-2 md:row-span-2",        // Large square (bottom-right)
  ];

  // Dummy image paths (Replace with actual paths)
  const images = [
    { src: "gallery/1.png", type: "png" },
    { src: "gallery/2.jpg", type: "jpg" },
    { src: "gallery/3.png", type: "png" },
    { src: "gallery/4.png", type: "png" },
    { src: "gallery/5.jpg", type: "jpg" },
    { src: "gallery/6.png", type: "png" },
    { src: "gallery/7.png", type: "png" },
    { src: "gallery/8.png", type: "png" },
    { src: "gallery/9.jpg", type: "jpg" },
    { src: "gallery/10.png", type: "png" },
    { src: "gallery/11.jpg", type: "jpg" },
    { src: "gallery/12.jpg", type: "jpg" },
  ];

    const { t } = useTranslation(); 
  return (
    <section id="gallery" className="p-8 bg-gradient-to-b from-[#FFF9E6] to-[#FFFDF5]">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-800">
      {t("gallery.heading")}
      </h2>

      {/* Enhanced masonry grid with dense packing */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[120px] md:auto-rows-[200px] grid-flow-dense">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 
              ${imageLayout[index]} 
              col-span-1 row-span-1`} // Base mobile layout
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                image.type === "png" ? "bg-white p-2" : ""
              }`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;