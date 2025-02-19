import React from "react";
import { useTranslation } from "react-i18next";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "गुरुजी ने माँ बगलामुखी की विशेष पूजा करवाई और कुछ ही समय में मेरा कोर्ट केस जीत गया। पहले बहुत तनाव था, लेकिन अब सब ठीक हो गया। उनका आशीर्वाद सच्चा है!",
      name: "-Rahul Sharma",
      location: "Jaipur, Rajasthan",
    },
    {
      text: "Pandit Deepak Guruji’s guidance changed my life! I was facing continuous business losses, but after performing a special havan, things took a positive turn. Truly grateful!",
      name: "-Micheal D'Souza",
      location: "Mumbai, Maharashtra",
    },
    {
      text: "गुरुजी ने मंगल दोष निवारण पूजा करवाई और कुछ ही महीनों में मेरा विवाह तय हो गया। पहले कई रुकावटें आ रही थीं, लेकिन अब सब सही दिशा में है। उनका आभार व्यक्त करती हूँ।",
      name: "-Pranav Soni",
      location: "London, UK",
    },
    {
      text: "Mere jeevan mein bahut samasya thi – dushman, paise ki dikkat, aur ghar mein tanav. Guruji ne ek shakti pooja ki aur sab kuch achanak sudhar gaya. Unki pooja sach mein chamatkari hai!",
      name: "-Amit Sharma",
      location: "Dehli",
    },
    {
      text: "My family was struggling with constant health issues. Guruji performed a Navgraha Shanti Puja for us, and since then, there has been peace at home. His knowledge of rituals is incredible!",
      name: "-Priya Mehta",
      location: "Indore, Madhya Pradesh",
    },
  ];

  const { t } = useTranslation();
  return (
    <section id="reviews" className="p-4 md:p-8 bg-[#FFFDF5]">
      <h2 className="text-left pt-8 text-3xl font-bold text-black mb-4">
      {t("reviews.heading")}
      </h2>
      <p className="text-left pb-8 text-sm md:text-base">
      {t("reviews.subheading")}
      </p>

      {/* Scrollable Reviews Container */}
      <div className="flex overflow-x-auto gap-6 p-2 scrollbar-hide">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90%] sm:w-[300px] md:w-[350px] h-[210px] bg-white border border-gray-300 shadow-lg p-6 rounded-xl relative"
          >
            {/* Review Text */}
            <p className="text-black text-sm md:text-base">{`"${review.text}"`}</p>

            {/* Reviewer Name & Place */}
            <div className="absolute bottom-4 right-4 text-right">
              <p className="text-gray-700 font-semibold text-xs md:text-sm">
                {review.name}
              </p>
              <p className="text-gray-500 text-xs md:text-sm">
                {review.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
