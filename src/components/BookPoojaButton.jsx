import { useTranslation } from "react-i18next";

const BookPoojaButton = () => {
  const { t } = useTranslation();
  return(
  <button
    onClick={() => (window.location.href = "tel:+919669070816")}
    className="w-full sm:w-auto h-[42px] rounded-lg py-3 px-8 bg-[#ffce1b] text-amber-950 font-medium text-sm transition-all hover:bg-[#ffc900]"
  >
  {t("bookpooja.text")}
  </button>
);}

export default BookPoojaButton;
