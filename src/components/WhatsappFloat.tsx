import Image from "next/image";
import { buildWhatsappLink } from "../lib/links";

export default function WhatsappFloat() {
  const whatsappLink = buildWhatsappLink();
  if (!whatsappLink) return null;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <Image
        src="/assets/wapp_icons.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-11 h-11"
        priority={false}
      />
    </a>
  );
}
