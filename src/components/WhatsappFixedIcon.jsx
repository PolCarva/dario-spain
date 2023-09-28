import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhatsappFixedIcon = () => {
  const { t } = useTranslation();
  const textoPredefinido =
  t("contact-buttons.whatsapp-msg");

  const abrirWhatsapp = () => {
    const numeroTelefono = "+549351573-9982"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
      textoPredefinido
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={abrirWhatsapp}
      className="fixed bottom-5 right-5 z-40 text-primary aspect-square h-16 md:h-[4.2rem] lg:h-20 shadow-sm rounded-full bg-white border-2 border-primary p-4 hover:text-white hover:bg-primary transition-all duration-300"
    >
      <FaWhatsapp className="h-full w-full " />
    </button>
  );
};

export default WhatsappFixedIcon;
